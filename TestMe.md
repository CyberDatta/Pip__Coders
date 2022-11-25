for downloading the dependencies and initial setup

```
cd app/
virtualenv venv
source venv/bin/activate
pip3 install -r requirements.txt

cd ../app_ui
npm install
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
