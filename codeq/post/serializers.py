from rest_framework import serializers, fields
from django.contrib.auth.models import User
from django.db.models import Count

from .models import Question, Comment, Answer
from tags.tag_choices import TAGS
from useraccount.serializers import UserSerializer

class QuestionSeriaizer(serializers.ModelSerializer):
    tag = fields.MultipleChoiceField(choices=TAGS)
    user = UserSerializer(many=False, read_only=True)
    user_id = serializers.IntegerField(write_only=True)
    created_at = serializers.DateTimeField(format='%d-%h-%Y,%H%M', read_only=True)
    answer = serializers.StringRelatedField(many=True)
    
    class Meta:
        model = Question
        fields = '__all__'
        lookup_field = 'slug'
        depth = 1

class AnswerSeriaizer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    user_id = serializers.IntegerField(write_only=True)
    question = QuestionSeriaizer(many=False, read_only=True)
    question_id = serializers.IntegerField(write_only=True)
    created_at = serializers.DateTimeField(
        format='%d-%h-%Y,%H%M', read_only=True)
    class Meta:
        model = Answer
        fields = "__all__"
        lookup_field = 'slug'
        depth = 1


class CommentSeriaizer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    user_id = serializers.IntegerField(write_only=True)
    answer = AnswerSeriaizer(many=False, read_only=True)
    answer_id = serializers.IntegerField(write_only=True)
    created_at = serializers.DateTimeField(
        format='%d-%h-%Y,%H%M', read_only=True)
    class Meta:
        model = Comment
        fields = "__all__"
        lookup_field = 'slug'
        depth = 1
