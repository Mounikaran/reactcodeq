from django.urls import path, include

from rest_framework import routers

from .views import TagViewSet

router = routers.DefaultRouter()

router.register(r'', TagViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
