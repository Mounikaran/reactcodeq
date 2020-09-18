from rest_framework import viewsets
from rest_framework import permissions

from .serializers import TagSerializer
from .models import Tag



class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all();
    serializer_class = TagSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'name'