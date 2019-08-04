from django.contrib import admin
from django.urls import path, include
from core.views import index
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", index, name="index"),
    path("login/", obtain_jwt_token, name="obtain_token"),
    path('refresh-token/', refresh_jwt_token, name="refresh_token"),
    path('auth-jwt-verify/', verify_jwt_token, name="verify_token"),
    path('api/', include('api.urls', namespace='api')),
]
