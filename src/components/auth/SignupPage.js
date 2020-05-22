// import React, { useState } from 'react';
// import Paper from '../Paper';
// import { Button, TextField } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import firebase from '.../src/firebase';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(3),
//       width: '25ch',
//     },
//   },
// }));

// const LoginPage = () => {
//   const classes = useStyles();

//   const [email, setEmail] = useState('');
//   const [username, setuserName] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // [START_EXCLUDE]
//         if (errorCode === 'auth/weak-password') {
//           alert('The password is too weak.');
//         } else {
//           alert(errorMessage);
//         }
//         console.log(error);
//         // [END_EXCLUDE]
//       });
//   };

//   const content = (
//     <form align="center" className={classes.root}>
//       <TextField
//         required
//         id="outlined-required"
//         label="Email"
//         variant="outlined"
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//         value={email}
//       />
//       <TextField
//         required
//         id="outlined-required"
//         type="password"
//         label="Password"
//         variant="outlined"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//         value={password}
//       />
//       <Button onSubmit={handleSubmit} variant="contained" color="primary">
//         Sign In
//       </Button>
//     </form>
//   );

//   return <Paper content={content}></Paper>;
// };

// export default LoginPage;
