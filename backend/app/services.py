from app.schemas import ProfileResponse, Project


def get_profile_data() -> ProfileResponse:
    # TODO: replace the actual content from a file or database
    projects = [Project(name="Example", url="https://github.com/")]
    return ProfileResponse(
        name="Vlad Stasiuk",
        skills=["Python", "Data Engineering"],
        experience=["3+ years at Company X", "2 years freelance"],
        projects=projects,
    )
