from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Question, Comment, Answer


class QuestionSeriaizer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"


class AnswerSeriaizer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Answer
        fields = "__all__"


class CommentSeriaizer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"