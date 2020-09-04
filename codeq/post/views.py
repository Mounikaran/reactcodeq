from django.shortcuts import render

from rest_framework import viewsets
from rest_framework import permissions

from .serializers import QuestionSeriaizer, AnswerSeriaizer, CommentSeriaizer
from .models import Question, Answer, Comment

# Create your views here.

class QuestionViewset(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSeriaizer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class AnswerViewset(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSeriaizer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class CommentViewset(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSeriaizer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
