// import firebase from 'firebase/app';
// import 'firebase/database';
// import 'firebase/auth';// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8GMtqL24u1T-TFK5KAhenvb5U1GgHmWo",
    authDomain: "waste-food-management-3d458.firebaseapp.com",
    databaseURL: "https://waste-food-management-3d458-default-rtdb.firebaseio.com",
    projectId: "waste-food-management-3d458",
    storageBucket: "waste-food-management-3d458.appspot.com",
    messagingSenderId: "423228747816",
    appId: "1:423228747816:web:e4b20539f860001c1c34851d",
    measurementId: "G-Z8FJDGN1Z8"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const messageContainer = document.getElementById('message');

// Sign up function
const register = () => {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // const name = document.getElementById('name').value;
    // const dob = document.getElementById('dob').value;
    // const gender = document.getElementById('gender').value;
    // const mobile = document.getElementById('mobile').value;
    // const address = document.getElementById('address').value;
    // const location = document.getElementById('location').value;

    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            messageContainer.textContent = `Logged in as ${user.email}`;
            // firebase.firestore().collection('users').doc(user.uid).set({
            //         Name: name,
            //         Dob: dob,
            //         Gender: gender,
            //         Mobile: mobile,
            //         Address: address,
            //         Location: location,
            //     });
            alert("You are Signed Up");
            window.location.href = './Dashboard.html'
        })
        .catch((error) => {
            console.log(error.code);
            console.error(error.message)
            messageContainer.textContent = 'Error occurred during signup'
        });
}


// Sign In function
const login = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            messageContainer.textContent = `Logged in as ${user.email}`;
            alert("You are Signed In");

            // Redirect to dashboard or home page
            window.location.href = './Dashboard.html'
        })
        .catch((error) => {
            console.error(error.message)
            messageContainer.textContent = 'Error occurred during login'
        });
}