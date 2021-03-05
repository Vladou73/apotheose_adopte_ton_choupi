//JWT signin  - with callback
const privateKey = ''
jwt.sign(
  { foo: 'bar' },  //payload
  privateKey, //clé secrète
  { algorithm: 'HS256' }, //algo de hachage de la clé ? optionnel avec HS256 par défaut
  { expiresIn: '1h' }, //durée de validité du JWT
  function(err, token) { // fonction de callback, contient le token ou renvoie l'erreur
    console.log(token);
    console.log('err',err);
  }
);

// verify a token symmetric - with callback
jwt.verify(
  token, //jsonWebToken string
  secretOrPublicKey, //is a string or buffer containing either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA. If jwt.verify is called asynchronous, secretOrPublicKey can be a function that should fetch the secret or public key. See below for a detailed example
  function(err, decoded) { // fonction de callback, contient le token ou renvoie l'erreur
    console.log('decoded',decoded);
    console.log('err',err);
  }  
)
