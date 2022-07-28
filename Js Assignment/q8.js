// part a
const user = { userId: "11001", firstName: "Aparna", LastName: "Chauhan", password: "appu2002", country: "India", continent: "Asia", };
console.log(`
    user id: ${user.userId}
    First Name: ${user.firstName}
    Last Name: ${user.LastName}
    password: ${user.password}
    Country: ${user.country}
    Continentz: ${user.continent}
`);

//part b
delete user.country;
delete user.continent;
console.log(user);

//part c
for (const i in user) {
    console.log(`${i}: ${user[i]}`);
}
