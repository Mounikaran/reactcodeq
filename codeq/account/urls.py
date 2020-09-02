from django.urls import path, include
from rest_framework import routers

from . import views as accountviews

router = routers.DefaultRouter()
router.register(r'users', accountviews.UserViewSet)
router.register(r'groups', accountviews.GroupViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
