for downloading the dependencies and initial setup

```
cd app/
virtualenv venv
source venv/bin/activate
pip3 install -r requirements.txt
touch .env

cd ../app_ui
npm install
```

add the following in app/.env
```
DB_URL = "postgres://vsjplhpg:CJVkLeakz5qsmykw-jWpd4RMmvovZ0nq@tiny.db.elephantsql.com/vsjplhpg"
```
for running backend server

```
cd app/
python3 manage.py runserver
```

for running frontend server

```
cd app_ui/
npm start
```

if these doesn't work then please clone the code from following link
frontend repo: https://github.com/ultimatecoder2/pfh_22_frontend
backend repo: https://github.com/amangupta0709/stgi-backend

NOTE: there is no further commit changes in both the repos after the hackathon was completed
