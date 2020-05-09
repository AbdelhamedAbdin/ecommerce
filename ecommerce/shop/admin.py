from django.contrib import admin
from .models import Category, Product


class CategoryAdmin(admin.ModelAdmin):
    """Admin view for Category"""
    list_display = ("name", "slug",)
    prepopulated_fields = {'slug': ('name', )}


admin.site.register(Category, CategoryAdmin)


class ProductView(admin.ModelAdmin):
    """Admin view for Product"""
    list_display = ("name", "slug", "image", "description", "price", "stock", "available", "created", "updated",)
    list_filter = ("available", "created", "updated", "category",)
    list_editable = ("price", "stock", "available",)
    prepopulated_fields = {'slug': ('name', )}


admin.site.register(Product, ProductView)
