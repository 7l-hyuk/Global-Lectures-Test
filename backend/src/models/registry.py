# app/services/registry.py
from typing import Type, Literal
from src.models.basemodel import BaseServiceModel
from src.models.language import SupportedLanguages


SERVICE_MODEL_REGISTRY: dict[str, Type[BaseServiceModel]] = {}
Services = Literal["stt", "tts", "translator"]
support_language_codes = {
    "stt": SupportedLanguages.WHISPERX,
    "tts": SupportedLanguages.NLLB,
    "translator": SupportedLanguages.XTTS_V2
}


def register_service(name: str):
    def decorator(cls: Type[BaseServiceModel]):
        SERVICE_MODEL_REGISTRY[name] = cls
        return cls
    return decorator


def create_service(name: Services, *args, **kwargs) -> BaseServiceModel:
    cls = SERVICE_MODEL_REGISTRY.get(name)
    if not cls:
        raise ValueError(f"Service model '{name}' is not registered.")
    return cls(
        support_language_code=support_language_codes[name],
        *args,
        **kwargs
    )
