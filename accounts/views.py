from django.shortcuts import render
from django.contrib.auth import login,authenticate
from .forms import LoginForm,RegisterationForm
from django.http import HttpResponse
from .serializer import UserSerializer ,  UserSerializerWithToken
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework_jwt.views import ObtainJSONWebToken
from rest_framework_jwt.settings import api_settings
import datetime
from django.contrib.auth.models import User
from rest_framework_simplejwt.views import TokenObtainPairView

@permission_classes([permissions.AllowAny])
@api_view(['GET'])
def current_uer (request) :
    
    content={'message':'admin'}
    
    return Response(content,status=status.HTTP_200_OK)
    
class UserList (APIView) :

    permission_classes=[permissions.AllowAny]
    def post (self , request):
        print(self.request.data)
        serializer = UserSerializerWithToken(data=self.request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    
       
