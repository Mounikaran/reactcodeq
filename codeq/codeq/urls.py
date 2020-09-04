"""codeq URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    # custom homepage
    path('',TemplateView.as_view(template_name = 'index.html')),
    # admin url
    path('admin/', admin.site.urls),
    # apps urls
    path('account/', include('useraccount.urls')),
    path('post/', include('post.urls')),

    # rest framwork auth urls
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
