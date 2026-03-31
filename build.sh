#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirementss.txt
pip install gunicorn whitenoise

python manage.py collectstatic --no-input
python manage.py migrate
