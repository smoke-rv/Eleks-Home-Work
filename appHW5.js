/*console.log(`Initial text`);
console.log(`Next text`);
setTimeout(() => {
    console.log(`and some text again`);
}, 3000)

console.log(`Last text`);
*/

/*console.log(`Initial text`);
console.log(`Next text`);

new Promise((resolve, reject) => setTimeout(() => {
    console.log(`and some text again`);
}, 3000)).then(() => {
    console.log(`Last text`);
}); */


Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
]).then((results) => {
    console.log(results[0]);
    console.log(results[2])
});


function login(email, pass) {
    emailInput.sendKeys(email).then(() => {
        passwordInput.sendKeys(password).then(() => {
            loginButton.press()
        })
    })
}

async function login(email, pass) {
    await emailInput.sendKeys(email);
    await passwordInput.sendKeys(password);
    await loginButton.press();
}