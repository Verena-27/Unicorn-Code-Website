# models.py
# models.py
from app import db

class Exercise(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(1000), nullable=True)
    code_file = db.Column(db.String(255), nullable=False)
    solution_file = db.Column(db.String(255), nullable=True)

