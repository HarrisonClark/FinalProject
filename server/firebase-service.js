const admin = require('firebase-admin');

var serviceAccount = require('../service-account-fiile.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://hackbook-8c8bb.firebaseio.com',
});

module.exports = admin;
