from django.db import models

# Create your models here.

class Tag(models.Model):
    name = models.CharField(max_length=40)
    version = models.CharField(max_length=20)
    detail = models.TextField(max_length=500, null=True)
    site = models.URLField(null=True)
    
    def __str__(self):
        return self.name +" - "+ self.version
    