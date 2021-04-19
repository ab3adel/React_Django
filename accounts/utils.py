from .serializer import UserSerializer


def my_jwt (token,user=None,request=None):
    
    return {
        'token':token,
        'user':UserSerializer(user,context={'request':request}).data
    }
