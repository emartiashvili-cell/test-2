<script src="script.js"></script>
setTimeout(() => {
    console.log("Hello after 3 seconds");
}, 3000); 
const loginPromise = new Promise((resolve, reject) => {
    resolve("login successful");
});

loginPromise.then((result) => {
    console.log(result);
});
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
    localStorage.setItem("name", "Ekaterine");

const user = localStorage.getItem("name");

console.log(user);
sessionStorage.setItem("city", "Tbilisi");

const city = sessionStorage.getItem("city");

console.log(city);
