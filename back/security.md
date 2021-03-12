1. JWT
JWT was chosen above session to ensure connexion of admins.

- Connexion via formulaire : envoie d'une demande de connexion avec password et username
- Recherche du user dans la DB
- Si il est trouvé,
  - génère un token JWT
  - génère un cookie qui contient ce token
  - Renvoie à la fois le cookie (contenant le token) et dans le corps les infos du user (dont le token) 

2. Cookies

- Le cookie renvoyé est stocké dans le browser côté client. Il y reste stocké et accessible par défaut, même si il y a des refresh (à la différence du state)
- le cookie est avec paramètre httpOnly => il n'est pas récupérable / modifiable via du javascript dans le browser

3. CSRF (cross-site request forgery attacks) protection

- anti-CSRF token : library csurf
- au moment de la connexion, en + du JWT, le server envoie au client un anti-csrf token.
- Celui-ci doit également être stocké côté server (cookie). Le but est de le stocker **en HTML** (et pas dans un cookie). De cette manière, il ne peut pas être récupéré lors d'une attaque CSRF (qui se contente d'envoyer le cookie contenant notre JWT pour simuler que la requête provient de nous)
- Côté REACT :
  - One common method is to put it in a meta tag when the app loads
  - Since we’re working from the root of our React app, we can send a request when the app loads and keep the resulting CSRF token in app state
  - It can then be set as a default header on POST request made by axios
- Quand le client souhaite appeler une route autre que GET, il doit obligatoirement renvoyer ce token pour que la requête au serveur soit autorisée. Comme une attaque CSRF n'a pas accès à ce token provenant du html, on est protégé

4. Password encryption/decryption

using bcrypt to

- encrypt password when a new password is stored in DB
- decrypt a password from DB when a user tries to connect