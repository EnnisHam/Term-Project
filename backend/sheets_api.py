# Standard library modules
from copy import deepcopy
from datetime import date
from os import path as file_path
from typing import List

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
        raw = self._service.get_all_values()
        data = deepcopy(raw)

        empty = ['', '', '', '']

        while empty in data:
            data.remove(empty)

        return data


    def search(self, field: str):
        raw = self.read_all()[1:]
        data = None

        if field.lower() == 'status':
            checked_in = [row for row in raw if 'IN' in row]
            checked_out = [row for row in raw if 'OUT' in row]
            return checked_in + checked_out
        else:
            data = [row for row in raw if field in row]

        return data


if __name__ == '__main__':
    sheet_id = 'cs780 term project'
    scope = ['https://spreadsheets.google.com/feeds',
             'https://www.googleapis.com/auth/spreadsheets',
             'https://www.googleapis.com/auth/drive.file',
             'https://www.googleapis.com/auth/drive']

    source = Database(sheet_id, 'token.json', scope)

    data = ['13', 'ennis', str(date.today()), 'IN']

    response = source.append(data)
    print(response)

    print('\n\n')

    response = source.read_all()[1:]
    print(response)
