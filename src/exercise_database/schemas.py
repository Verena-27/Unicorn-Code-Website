# schemas.py
from marshmallow import Schema, fields

class ExerciseSchema(Schema):
    class Meta:
        fields = ('exercise_id', 'name', 'description', 'code_file', 'solution_file', 'parent_id')

class TagSchema(Schema):
    class Meta:
        fields = ('tag_id', 'name')

class ExerciseTagSchema(Schema):
    class Meta:
        fields = ('exercise_id', 'tag_id', 'is_prerequisite')
