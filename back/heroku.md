1. DASHBOARD PRIVE HEROKU
https://dashboard.heroku.com/apps/spa-apotheose

2. APP PUBLIC HEROKU
https://spa-apotheose.herokuapp.com/animals

3. COMMANDES HEROKU

LOGIN HEROKU
dans le terminal : /snap/bin/heroku login

PUSH TO HEROKU MASTER
1) se mettre à la racine du repo
2) dans le terminal : git subtree push --prefix back heroku master

DEPLOY/REVERT sqitch
dans le terminal : sqitch revert/deploy db:pg:[adresse privée de la bdd heroku ]
