from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response

from codeq.permissions import IsOwnerOrReadOnly
from .serializers import QuestionSeriaizer, AnswerSeriaizer, CommentSeriaizer
from .models import Question, Answer, Comment

# Create your views here.

class QuestionViewset(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSeriaizer
    lookup_field = 'slug'
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
   

class AnswerViewset(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSeriaizer
    lookup_field = 'slug'
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

class CommentViewset(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSeriaizer
    lookup_field = 'slug'
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
