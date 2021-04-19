from django.contrib import admin
from .models import Category ,Items,Images
@admin.register(Category)
class CategoryAdmin (admin.ModelAdmin):
    list_display=['title']
  
@admin.register(Items)
class ItemsAdmin (admin.ModelAdmin):
    list_display=['title','price','created','category','available','description']    

@admin.register(Images)
class ImagesAdmin(admin.ModelAdmin) :
    list_display=['item','images']