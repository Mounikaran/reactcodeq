from rest_framework import serializers

from .models import Group, GroupMember

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = "__all__"