from django.urls import path, include

from rest_framework import routers

from . import views

router = routers.DefaultRouter()

router.register(r'questions', views.QuestionViewset)
router.register(r'answers', views.AnswerViewset)
router.register(r'comments', views.CommentViewset)

urlpatterns = [
    path('', include(router.urls)),
]