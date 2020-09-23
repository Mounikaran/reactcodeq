from django.contrib.auth.models import User, Group
from rest_framework import serializers, fields

from .models import Profile
from tags.models import Tag

from tags.tag_choices import TAGS

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

class ProfileSerializer(serializers.ModelSerializer):
    tag = fields.MultipleChoiceField(choices=TAGS)
    class Meta:
        model = Profile
        fields = ['id', 'profile_pic', 'slug', 'tag']
        
