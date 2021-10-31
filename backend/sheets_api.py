# Standard library modules
import json

from typing import List
from os import path as file_path

# Third party library modules
import gspread
from oauth2client.service_account import ServiceAccountCredentials as Credentials


class Database():
    def __init__(self, sheet_id: str, file_path: str, scope: List[str]):
        """initializes the sheets api with credentials"""
        self._id = sheet_id
        self._service = self.authenticate(file_path, scope)

    def authenticate(self, token: str, scope: List[str]):
        if file_path.exists(token):
            cred = Credentials.from_json_keyfile_name(token, scope)

        return gspread.authorize(cred).open(self._id).sheet1

    def append(self, values: List[str]):
        return self._service.insert_row(values, 2)

    def read_all(self):
        return self._service.get_all_values()

    def search(self, field: str):
        # TODO Filter values down to field parameter
        req = _service.spreadsheets().values().get(spreadsheetId=self._id)
        res = req.execute()
        self._cache = res['values']
        return res['values']



if __name__ == '__main__':
    sheet_id = 'cs780 term project'
    scope = ['https://spreadsheets.google.com/feeds',
             'https://www.googleapis.com/auth/spreadsheets',
             'https://www.googleapis.com/auth/drive.file',
             'https://www.googleapis.com/auth/drive']

    source = Database(sheet_id, 'token.json', scope)

    data = ['13', 'ennis', '10/13/1234', 'IN']

    response = source.append(data)
    print(response)

    print('\n\n')

    response = source.read_all()
    print(response)
