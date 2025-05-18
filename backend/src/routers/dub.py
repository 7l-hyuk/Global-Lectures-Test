from fastapi import APIRouter, UploadFile, Form


dubbing_routers = APIRouter(prefix="/v1/dub", tags=["dub"])

dubbing_routers.get("/")
def get_dub_video(
    video: UploadFile,
    source_lang: str = Form(...),
    target_lang: str = Form(...)
):
    ...
