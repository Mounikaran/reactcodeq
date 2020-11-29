from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions

from codeq.permissions import IsOwnerOrReadOnlyUser, IsOwnerOrReadOnly
from .serializers import UserSerializer, ProfileSerializer
from .models import Profile


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    lookup_field = 'username'
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnlyUser]

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]