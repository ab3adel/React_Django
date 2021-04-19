from django import forms
from django.contrib.auth.models import User


class LoginForm (forms.Form):
    user_name= forms.CharField(max_length=20)
    password= forms.CharField(widget=forms.PasswordInput)
    
class RegisterationForm (forms.ModelForm):
    password= forms.CharField(widget=forms.PasswordInput)
    passowrd2=forms.CharField(widget=forms.PasswordInput)


    class Meta:
        model=User 
        fields=('username','email')

    def clean_pass2(self) :
        cd =self.cleaned_data
        if cd['password'] !=cd['password2']:
            raise forms.ValidationError('error')
        return cd['password2']