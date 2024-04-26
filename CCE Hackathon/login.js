const firebaseConfig = {
    apiKey: "AIzaSyC8GMtqL24u1T-TFK5KAhenvb5U1GgHmWo",
    authDomain: "waste-food-management-3d458.firebaseapp.com",
    databaseURL: "https://waste-food-management-3d458-default-rtdb.firebaseio.com",
    projectId: "waste-food-management-3d458",
    storageBucket: "waste-food-management-3d458.appspot.com",
    messagingSenderId: "423228747816",
    appId: "1:423228747816:web:e4b20539f860001c34851d",
    measurementId: "G-Z8FJDGN1Z8"
};

firebase.initializeApp(firebaseConfig);

// Get elements
const username = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');

// Login function
function login() {
    const Username = username.value;
    const userPassword = password.value;

    firebase.auth().signInWithEmailAndPassword(Username, userPassword)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            message.textContent = `Logged in as ${user.email}`;
            console.log('User logged in:', user);

            // Redirect to dashboard or home page
            window.location.href = 'D:/CCE%20Hackathon/Login.html';
        })
        .catch((error) => {
            const errorMessage = error.message;
            message.textContent = errorMessage;
        });
}

