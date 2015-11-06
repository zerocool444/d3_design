# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('d3', '0002_auto_20151105_1906'),
    ]

    operations = [
        migrations.AlterField(
            model_name='testitem',
            name='parent',
            field=models.ForeignKey(blank=True, to='d3.TestItem', null=True),
        ),
    ]
