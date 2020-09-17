from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import Profile
from tags.models import Tag

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "last_login",
            "email",
            "is_active",
            "is_superuser",
            "is_staff",
            "last_login",
            "date_joined",
        ]
        lookup_field = 'username'
        

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['name']

class ProfileSerializer(serializers.ModelSerializer):
    tag = TagSerializer(many=True, read_only=True)
    class Meta:
        model = Profile
        fields = ['id', 'user', 'profile_pic', 'slug', 'tag']
        lookup_field = 'slug'
        
