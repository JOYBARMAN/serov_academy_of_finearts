from django.apps import AppConfig


class SerovAcademyApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'serov_academy_api'

    def ready(self):
        import serov_academy_api.signals