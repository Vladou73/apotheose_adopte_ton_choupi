1. JWT
JWT was chosen above session to ensure connexion of admins.

- Connexion via formulaire : envoie d'une demande de connexion avec password et username
- Recherche du user dans la DB
- Si il est trouvé,
  - génère un token JWT
  - renvoie un cookie qui contient ce token 

2. Cookies

- Le cookie renvoyé est stocké dans le browser côté client. Il y reste stocké et accessible par défaut, même si il y a des refresh (à la différence du state)
- le cookie est avec paramètre httpOnly => il n'est pas récupérable / modifiable via du javascript dans le browser 

3. CSRF (cross-site request forgery attacks) protection
- anti-CSRF token : library csurf


1. Password encryption/decryption

using bcrypt to 

- encrypt password when a new password is stored in DB
- decrypt a password from DB when a user tries to connect