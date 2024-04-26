// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC8GMtqL24u1T-TFK5KAhenvb5U1GgHmWo",
    authDomain: "waste-food-management-3d458.firebaseapp.com",
    databaseURL: "https://waste-food-management-3d458-default-rtdb.firebaseio.com",
    projectId: "waste-food-management-3d458",
    storageBucket: "waste-food-management-3d458.appspot.com",
    messagingSenderId: "423228747816",
    appId: "1:423228747816:web:e155abf163c3a6be34851d",
    measurementId: "G-47XW10X72D"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

// Fetch and display donation history
db.collection('donations').get().then((querySnapshot) => {
    const tableBody = document.querySelector('#donationTable tbody');
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const row = `
            <tr>
                <td>${data.date}</td>
                <td>${data.donor}</td>
                <td>${data.orphanage}</td>
                <td>${data.quantity} kg</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
});

// Monthly Transaction of Food
const monthlyTransactionCtx = document.getElementById('monthlyTransactionChart').getContext('2d');
new Chart(monthlyTransactionCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Food Transaction (kg)',
            data: [50, 45, 60, 55, 70, 65],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
        }]
    }
});

// Users Benefitted
const usersBenefittedCtx = document.getElementById('usersBenefittedChart').getContext('2d');
new Chart(usersBenefittedCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Users Benefitted',
            data: [20, 25, 22, 30, 28, 35],
            backgroundColor: 'rgba(255, 159, 64, 0.5)'
        }]
    }
});

// Food Saved
const foodSavedCtx = document.getElementById('foodSavedChart').getContext('2d');
new Chart(foodSavedCtx, {
    type: 'doughnut',
    data: {
        labels: ['Utilized', 'Saved'],
        datasets: [{
            data: [450, 150],
            backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)']
        }]
    }
});
