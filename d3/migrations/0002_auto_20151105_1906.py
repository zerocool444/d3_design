# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('d3', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='testitem',
            name='parent',
            field=models.ForeignKey(to='d3.TestItem', null=True),
        ),
    ]
