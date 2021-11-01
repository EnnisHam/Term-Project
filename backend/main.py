# user defined modules
from sheets_api import Database

# Standard library modules
from datetime import date

# Third party libraries
from flask import Flask, request
from flask_restful import Resource, Api


# globals
app = Flask(__name__)
api = Api(app)

database = None


class CheckIn(Resource):
    """Check in Resource class"""
    def post(self):
        json = request.get_json(force=True)

        _id = json['id']
        _name = json['name']
        _date = str(date.today())

        data = [_id, _name, _date, 'IN']

        database.append(data)
        return {'status': 'success', 'data': data}


class CheckOut(Resource):
    """Check out Resource class"""
    def post(self):
        json = request.get_json(force=True)

        _id = json['id']
        _name = json['name']
        _date = str(date.today())

        data = [_id, _name, _date, 'OUT']

        database.append(data)
        return {'status': 'success', 'data': data}


class Search(Resource):
    """Search Resource class"""
    def get(self, search_field: str):
        data = database.search(search_field)

        return {'data': data,
                'length': len(data)}


# Add resources here
api.add_resource(CheckIn, '/in')
api.add_resource(CheckOut, '/out')
api.add_resource(Search, '/search/<string:search_field>')


if __name__ == '__main__':
    scope = ['https://spreadsheets.google.com/feeds',
             'https://www.googleapis.com/auth/spreadsheets',
             'https://www.googleapis.com/auth/drive.file',
             'https://www.googleapis.com/auth/drive']

    database = Database('cs780 term project', 'token.json', scope)

    app.run(debug=True)
