# Generated by Django 3.1.2 on 2020-11-23 19:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shopping_list', '0003_auto_20201118_1225'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoppinglistitem',
            name='department',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='shopping_list.department'),
        ),
    ]
