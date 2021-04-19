from .models import Images,Items
from django import forms 
from django.forms.models import inlineformset_factory



class Imageform(forms.ModelForm) :
    
    class Meta :
        model=Images
        fields=('images',)
    
   


imageformset=inlineformset_factory(Items,Images,Imageform,widgets={})