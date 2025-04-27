from fastapi import FastAPI
from app.api.profile import router as profile_router

app = FastAPI(
    title="Profile API", description="API to retrieve profile data", version="1.0.0"
)

app.include_router(profile_router, prefix="/api/profile", tags=["profile"])
