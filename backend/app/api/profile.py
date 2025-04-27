from fastapi import APIRouter, HTTPException
from app.schemas import ProfileResponse
from app.services import get_profile_data

router = APIRouter()


@router.get("/", response_model=ProfileResponse)
def read_profile():
    try:
        return get_profile_data()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
