from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, exceptions
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from .models import User
from .serializers import UserSerializer
from django.db.models import Q


class UserList(APIView):
    """
    Create and list all users
    """

    # Make this protected
    def get(self, request):
        users = User.objects.all()
        users_serializer = UserSerializer(users, many=True)
        return Response(users_serializer.data)

    def post(self, request):
        serialized_user = UserSerializer(data=request.data)
        if serialized_user.is_valid():
            password = make_password(request.data["password"])
            serialized_user.save(password=password)
            return Response(serialized_user.data, status=status.HTTP_201_CREATED)
        return Response(serialized_user.errors, status=status.HTTP_400_BAD_REQUEST)


class Auth(APIView):
    """
    Login user
    """

    def post(self, request):
        User = get_user_model()
        email = request.data.get("email")
        password = request.data.get("password")
        response = Response()
        if (email is None) or (password is None):
            raise exceptions.AuthenticationFailed(
                "username/email and password are required")

        try:
            user = User.objects.get(
                Q(email=email)
            )
        except:
            raise exceptions.AuthenticationFailed("user not found")
        if (not user.check_password(password)):
            raise exceptions.AuthenticationFailed("wrong password")

        serialized_user = UserSerializer(user).data

        # TODO: Create access & refresh token
        response.data = {
            "user": serialized_user,
        }
        return response
