from rest_framework import serializers,status
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from django.contrib.auth import login,authenticate
from rest_framework_jwt.serializers import JSONWebTokenSerializer
from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer,TokenObtainSerializer,TokenRefreshSerializer

class UserSerializer (serializers.ModelSerializer):
   
    class Meta :
        model=User
        fields=('email',)
    def validate(self,attrs):
        print(attrs)    
        data=super(UserSerializer,self).validate(attrs)
    

class UserSerializerWithToken (serializers.Serializer):
    username=serializers.CharField(write_only=True)
    password=serializers.CharField(write_only=True)
    email=serializers.EmailField(write_only=True)
    token=serializers.SerializerMethodField()


    def get_token (self,obj):
    
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload=jwt_payload_handler(obj)
        token=jwt_encode_handler(payload)
        return token

    def create (self,validated_data):
        instance=self.Meta.model(**validated_data)
       
        password=validated_data.pop('password',None)
        if password is not None :
            instance.set_password(password)
        instance.save()
        return instance
    class Meta:
        model =User
        fields=['username','password','email','token']    
class  MyTokenObtainPairSerializer (TokenObtainPairSerializer)  :
    def validate(self, attrs):
    
        
        credentials = {
            'username': '',
            'password': attrs.get("password")
        }
        user_obj = User.objects.filter(email=attrs.get("username")).first() or User.objects.filter(username=attrs.get("username")).first()
        if user_obj:
            
            credentials['username'] = user_obj.username
          

           
        return super().validate(credentials)    
    
       
