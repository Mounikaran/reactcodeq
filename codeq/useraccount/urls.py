from django.urls import path, include
from rest_framework import routers

from .views import ProfileViewSet, UserViewSet 

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'profiles', ProfileViewSet)

urlpatterns = [
    path('', include(router.urls))
]
