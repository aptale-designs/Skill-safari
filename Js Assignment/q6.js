
let user = function() {
    var userId, firstName, lastName, password, email, gender, age, accountCreated;
    userId = document.getElementById('userId').value;
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    password = document.getElementById('password').value;
    email = document.getElementById('email').value;
    gender = document.getElementById('gender').value;
    age = document.getElementById('age').value;
    alert("account created")
    console.log(`
       userid: ${userId}
       first Name: ${firstName}
       Last Name: ${lastName}
       password: ${password}
       email: ${email}
       gender: ${gender}
       age: ${age}
       `);
}