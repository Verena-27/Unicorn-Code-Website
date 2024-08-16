# app.py
import logging
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from os.path import abspath, dirname, join

logging.basicConfig()
logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)

app = Flask(__name__)
CORS(app)

db_name = 'exercisesTags.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + abspath(join(dirname(__file__), db_name))
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Exercise(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(1000), nullable=True)
    code_file = db.Column(db.String(255), nullable=False)
    solution_file = db.Column(db.String(255), nullable=True)
    tags = db.relationship('Tag', secondary='exercise_tags', back_populates='exercises') # Relationship with Tag model


class Tag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False, unique=True)
    exercises = db.relationship('Exercise', secondary='exercise_tags', back_populates='tags') # Relationship with Exercise model

# Association table for Exercise-Tag many-to-many relationship
exercise_tags = db.Table('exercise_tags',
    db.Column('exercise_id', db.Integer, db.ForeignKey('exercise.id'), primary_key=True),
    db.Column('tag_id', db.Integer, db.ForeignKey('tag.id'), primary_key=True)
)

# Route to get all the exercises with tags
@app.route('/exercises', methods=['GET'])
def get_exercises():
    exercises = Exercise.query.all()
    exercise_list = []
    for exercise in exercises:
        exercise_data = {
            'id': exercise.id,
            'name': exercise.name,
            'description': exercise.description,
            'code_file': exercise.code_file,
            'solution_file': exercise.solution_file,
            'tags': [tag.name for tag in exercise.tags]
        }
        exercise_list.append(exercise_data)

    return jsonify({'exercises': exercise_list})

# Route to add an exercise with tags
@app.route('/exercises', methods=['POST'])
def add_exercise():
    data = request.get_json()

    # Check if 'name' is present in the JSON data
    if 'name' not in data:
        return jsonify({'error': 'Name is required for an exercise'}), 400

    exercise_name = data['name']

    # Check if the exercise already exists
    existing_exercise = Exercise.query.filter_by(name=exercise_name).first()
    if existing_exercise:
        return jsonify({'error': 'Exercise with the same name already exists'}), 400

    # Create a new exercise
    new_exercise = Exercise(name=exercise_name, description=data.get('description', ''),
                            code_file=data.get('code_file', ''), solution_file=data.get('solution_file', ''))

    # Add tags to the exercise
    if 'tags' in data:
        tags = Tag.query.filter(Tag.name.in_(data['tags'])).all()
        new_exercise.tags.extend(tags)

    db.session.add(new_exercise)
    db.session.commit()

    return jsonify({'message': f'Exercise "{exercise_name}" added successfully'}), 201

# Route to edit an exercise
@app.route('/exercises/<exercise_id>', methods=['PUT'])
def edit_exercise(exercise_id):
    exercise = Exercise.query.get(exercise_id)
    if not exercise:
        return jsonify({'error': 'Exercise not found'}), 404

    data = request.get_json()

    # Update exercise attributes
    exercise.name = data.get('name', exercise.name)
    exercise.description = data.get('description', exercise.description)
    exercise.code_file = data.get('code_file', exercise.code_file)
    exercise.solution_file = data.get('solution_file', exercise.solution_file)

    # Update tags for the exercise
    if 'tags' in data:
        tags = Tag.query.filter(Tag.name.in_(data['tags'])).all()
        exercise.tags = tags

    db.session.commit()

    return jsonify({'message': f'Exercise "{exercise.name}" updated successfully'}), 200

# Route to delete an exercise
@app.route('/exercises/<exercise_id>', methods=['DELETE'])
def delete_exercise(exercise_id):
    exercise = Exercise.query.get(exercise_id)
    if exercise:
        db.session.delete(exercise)
        db.session.commit()
        return jsonify({'message': f'Exercise "{exercise.name}" deleted successfully'}), 200
    else:
        return jsonify({'error': 'Exercise not found'}), 404

# Route to get all tags
@app.route('/tags', methods=['GET'])
def get_tags():
    tags = Tag.query.all()
    tag_list = [{'id': tag.id, 'name': tag.name} for tag in tags]
    return jsonify({'tags': tag_list})

# Route to add a new tag
@app.route('/tags/add', methods=['POST'])
def add_tag():
    data = request.get_json()

    # Check if 'name' is present in the JSON data
    if 'name' not in data:
        return jsonify({'error': 'Name is required for a tag'}), 400

    tag_name = data['name']

    # Check if the tag already exists
    existing_tag = Tag.query.filter_by(name=tag_name).first()
    if existing_tag:
        return jsonify({'error': 'Tag with the same name already exists'}), 400

    # Create a new tag
    new_tag = Tag(name=tag_name)
    db.session.add(new_tag)
    db.session.commit()

    return jsonify({'message': f'Tag "{tag_name}" added successfully'}), 201

# Route to edit an existing tag
@app.route('/tags/edit/<tag_id>', methods=['PUT'])
def edit_tag(tag_id):
    tag = Tag.query.get(tag_id)
    if not tag:
        return jsonify({'error': 'Tag not found'}), 404

    data = request.get_json()

    # Update tag name
    tag.name = data.get('name', tag.name)

    db.session.commit()

    return jsonify({'message': f'Tag "{tag.name}" updated successfully'}), 200

# Route to delete a tag
@app.route('/tags/<tag_id>', methods=['DELETE'])
def delete_tag(tag_id):
    tag = Tag.query.get(tag_id)
    if tag:
        db.session.delete(tag)
        db.session.commit()
        return jsonify({'message': f'Tag "{tag.name}" deleted successfully'}), 200
    else:
        return jsonify({'error': 'Tag not found'}), 404



def add_dummy_data():
    if not Exercise.query.all():
        exercises_data = [
            {'name': 'Exercise 1', 'description': 'Description 1', 'code_file': 'code1.py', 'solution_file': 'solution1.py'},
            {'name': 'Exercise 2', 'description': 'Description 2', 'code_file': 'code2.py', 'solution_file': 'solution2.py'},
            {'name': 'Exercise 3', 'description': 'Description 3', 'code_file': 'code3.py', 'solution_file': 'solution3.py'},
        ]

        tags_data = [
            {'name': 'Variables'},
            {'name': 'Loops'},
            {'name': 'Functions'},
        ]

        for data in tags_data:
            tag = Tag(**data)
            db.session.add(tag)

        for data in exercises_data:
            exercise = Exercise(**data)
            # Add tags to exercises
            exercise.tags.extend(Tag.query.all())
            db.session.add(exercise)

        db.session.commit()


with app.app_context():
    db.create_all()
    add_dummy_data()

if __name__ == '__main__':
    app.run(debug=True)
