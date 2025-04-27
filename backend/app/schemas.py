from pydantic import BaseModel, HttpUrl
from typing import List


class Project(BaseModel):
    name: str
    url: HttpUrl


class ProfileResponse(BaseModel):
    name: str
    skills: List[str]
    experience: List[str]
    projects: List[Project]
