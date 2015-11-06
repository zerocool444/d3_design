from django.db import models

# Create your models here.
class TestItem(models.Model):
    name = models.CharField(max_length=100)
    parent = models.ForeignKey("self", null=True, blank=True)

    def __str__(self):
        return self.name

    def get_parent(self):
        return self.parent

    def get_children(self):
        return TestItem.objects.filter(parent=self)
