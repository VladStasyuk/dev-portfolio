from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()


@app.get("/")
def get_profile():
    return {
        "name": "Vlad Stasiuk",
        "skills": ["Python", "FastAPI", "Data Engineering"],
        "experience": ["3 years in Luxoft"],
        "projects": ["Data Quality Platform", "BigQuery Pipeline"],
    }


handler = Mangum(app)
