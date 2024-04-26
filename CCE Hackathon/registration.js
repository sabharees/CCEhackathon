
// Initialize Firebase
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

// firebase.initializeApp(firebaseConfig);
// var db = firebase.database().ref("RegistrationForm");

// // Form submission
// var form = document.getElementById('RegistrationForm');
// var message = document.getElementById('message');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     var Name = getElementVal('name');
//     var dob = getElementVal('dob');
//     var gender = getElementVal('gender');
//     var mobile = parseInt(getElementVal('mobile'));
//     var username = getElementVal('username');
//     var password = getElementVal('password');
//     var address = getElementVal('address');
//     var location = getElementVal('location');
//     var newregistrationform= db.push();
//     // Add donation to Firestore
//     newregistrationform.set({
//         Name: Name,
//         DOB: dob,
//         Gender: gender,
//         MobileNo : mobile,
//         Username: username,
//         Password:password,
//         Address: address,
//         Location:location,
//         date: new Date().toISOString()
//     })
//     .then(() => {
//         message.textContent = 'Thank you for your donation!';
//         form.reset();
//     })
//     .catch((error) => {
//         console.error('Error adding donation: ', error);
//         message.textContent = 'Error submitting donation. Please try again.';
//     });
// });
// const getElementVal = (id) => {
//     return document.getElementById(id).value;
//   };


// firebase.initializeApp(firebaseConfig);

// // Get elements
// var Name = getElementVal('name');
//     var dob = getElementVal('dob');
//     var gender = getElementVal('gender');
//     var mobile = parseInt(getElementVal('mobile'));
//     var username = getElementVal('username');
//     var password = getElementVal('password');
//     var address = getElementVal('address');
//     var location = getElementVal('location');
//     var newregistrationform= db.push();

// // Register function

// function register() {
//     var userName = username.value;
//     var userPassword = password.value;

//     firebase.auth().createUserWithEmailAndPassword(userName, userPassword)
//         .then((userCredential) => {
//             // Registered successfully
//             var user = userCredential.user;
//             var userId = user.uid;

//             // Save NGO details to Firestore
//             firebase.firestore().collection('ngos').doc(userId).set({
//                 Name: Name,
//                 DOB: dob,
//                 Gender: gender,
//                 MobileNo : mobile,
//                 Username: username,
//                 Address: address,
//                 Location:location,
//                 date: new Date().toISOString()
//             })
//             .then(() => {
//                 message.textContent = 'Registered successfully!';
//             })
//             .catch((error) => {
//                 message.textContent = error.message;
//             });
//         })
//         .catch((error) => {
//             const errorMessage = error.message;
//             message.textContent = errorMessage;
//         });
// }
// const getElementVal = (id) => {
//     return document.getElementById(id).value;
//   };

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

function register() {
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var address = document.getElementById('address').value;
    var location = document.getElementById('location').value;

    // Create a new user with email and password
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('User registered:', user);

            // You can add additional user information to Firestore or Realtime Database here
            // For example, Firestore:
            // firebase.firestore().collection('users').doc(user.uid).set({
            //     name: name,
            //     dob: dob,
            //     gender: gender,
            //     mobile: mobile,
            //     address: address,
            //     location: location,
            // });

            // Display success message
            document.getElementById('message').textContent = 'Registration successful!';
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.error('Registration error:', errorMessage);

            // Display error message
            document.getElementById('message').textContent = errorMessage;
        });
}
