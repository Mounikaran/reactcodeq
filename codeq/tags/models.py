from django.db import models

# Create your models here.

class Tag(models.Model):
    name = models.CharField(max_length=40)
    version = models.CharField(max_length=20, null=True, default="")
    detail = models.TextField(max_length=500, null=True)
    site = models.URLField(null=True)
    
    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name +" - "+ self.version
    