from tags.models import Tag


TAGS = []

tag_objects = Tag.objects.all()

for tag in tag_objects:
    temp = [tag.id, tag.name]
    TAGS.append(temp)
