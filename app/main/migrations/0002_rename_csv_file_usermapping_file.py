# Generated by Django 4.1.3 on 2022-11-24 10:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="usermapping",
            old_name="csv_file",
            new_name="file",
        ),
    ]
