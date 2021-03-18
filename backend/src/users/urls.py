from django.urls import path
from .views import UserList, Auth

urlpatterns = [
    path("",  UserList.as_view(), name="register"),
    path("auth/login/",  Auth.as_view(), name="login"),
]
