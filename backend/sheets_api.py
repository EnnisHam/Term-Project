# Standard library modules
from typing import List
from os import path as file_path

# Third party library modules
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials

class SheetCredentials():
    def __init__(self, sheet_id: str, scopes: List[str], token_path: str):
        """initialized sheet credentials using:
        sheet_id,
        scope,
        and api token path"""
        self.sheet = sheet_id
        self.scope = scopes
        self.token = token_path

    @property
    def sheet(self):
        return self._sheet_id

    @property.setter
    def sheet(self, _id: str):
        if isinstance(_id, str):
            self._sheet_id = _id
        else:
            message = f'_id: {_id} cannot be assigned to sheet property'
            raise TypeError(message)

    @property
    def scope(self):
        return self._scope

    @property.setter
    def scope(self, _scope: List[str]):
        if isinstance(_scope, List[str]):
            self._scope = _scope
        else:
            message = f'_scope: {_scope} cannot be assigned to scope property'
            raise TypeError(message)

    @property
    def token(self):
        return Credentials.from_authorized_user_file(self._token_path,
                                                     self._scope)

    @property.setter
    def token(self, _path: str):
        if isinstance(_path, str) and file_path.exists(_path):
            self._token_path = _path
        else:
            message = f'_path: {_path} is not a valid path or not a string'
            raise PermissionError(message)



class Database():
    def __init__(self, sheet_id: str, credentials: Credentials):
        """initializes the sheets api with credentials"""
        self._token = credentials
        self._cache = {}
        self._id = sheet_id
        self._service = self.__start_service()

    def append(self, values: List[str]):
        num = 0
        req = _service.spreadsheets().values().append(spreadsheetId=self._id,
                                                     body=values)
        res = req.execute()
        self._cache = response['updates']

    def search(self, field: str):
        # TODO Filter values down to field parameter
        req = _service.spreadsheets().values().get(spreadsheetId=self._id)
        res = req.execute()
        self._cache = res['values']
        return res['values']

    @property
    def cache(self):
        return self._cache

    @property
    def service(self):
        return self._service

    def __start_service(self):
        return build('sheets', 'v4', credentials=self._token)
