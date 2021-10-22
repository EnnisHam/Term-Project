# Standard library modules
from typing import List

# Third party library modules
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials

class SheetCredentials():
    def __init__(self, sheet_id: str, scopes: List, token_path: str):
        """initialized sheet credentials using:
        sheet_id,
        scope,
        and api token path"""
        self._id = sheet_id
        self._scope = scopes
        self._token_path = token_path


class Database():
    def __init__(self, credentials: SheetCredentials):
        """initializes the sheets api with credentials"""
