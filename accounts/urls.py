from django.urls import path ,include
from .serializer import MyTokenObtainPairSerializer 
from .views import current_uer ,UserList 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('admin',current_uer , name="login"),
    path('signup',UserList.as_view(),name='register'),
    path('token',   TokenObtainPairView.as_view(serializer_class=MyTokenObtainPairSerializer), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]