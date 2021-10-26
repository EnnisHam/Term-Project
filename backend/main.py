# user defined modules
from sheets_api import SheetCredentials, Database

# Standard library modules
from datetime import date

# Third party libraries
from flask import Flask
from flask_restful import Resource, Api


# globals
app = Flask(__name__)
api = Api(app)

temp_data = {}

database = None

class CheckInService(Resource):
    #TODO make the actual endpoint
    """Check in Resource class"""
    def get(self, employee_id):
        return temp_data[employee_id]

    def put(self, employee_id):
        temp_data[employee_id] = date.today()

    def post(self, employee_id, body):
        pass


# Add resources here
api.add_resource(CheckIn, '/<string:employee_id>')

if __name__ == '__main__':
    scope = ['https://spreadsheets.google.com/feeds']
    credentials = SheetCredentials('ID', scope, 'file_path')
    database = Database(credentials)

    app.run(debug=True)
