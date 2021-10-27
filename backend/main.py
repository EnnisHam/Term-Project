# user defined modules
from sheets_api import SheetCredentials, Database

# Standard library modules
from datetime import date

# Third party libraries
from flask import Flask, request
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

    def post(self):
        json = request.get_json(force=True)

        _id = json['id']
        _name = json['name']
        _date = date.tody()

        data = [_id, _name, _date]

        database.append(data)
        return {'status': 'success', 'data': data}

# Add resources here
api.add_resource(CheckIn, '/<string:employee_id>')

if __name__ == '__main__':
    scope = ['https://spreadsheets.google.com/feeds']
    credentials = SheetCredentials('ID', scope, 'file_path')
    database = Database(credentials)

    app.run(debug=True)
