from django.urls import path, include
from rest_framework import routers

from .views import GroupViewSet, ProfileViewSet, UserViewSet 

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'profiles', ProfileViewSet)
router.register(r'groups', GroupViewSet)

urlpatterns = [
    path('', include(router.urls))
]
