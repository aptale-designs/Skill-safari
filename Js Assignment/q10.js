const user = {
    userId: "11001", firstName: "Aparna", LastName: "Chauhan", password: "appu2002", country: "India", continent: "Asia", age: "21", displayAge: function () {
        return this.age;
    }, AccountCreated: function () {
        return "Account Created";
    }
};
console.log(`
    user id: ${user.userId}
    First Name: ${user.firstName}
    Last Name: ${user.LastName}
    password: ${user.password}
    Country: ${user.country}
    Continent: ${user.continent}
`);
alert(`Age: ${user.displayAge}`);
alert(user.AccountCreated);