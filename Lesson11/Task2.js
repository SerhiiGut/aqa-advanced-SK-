function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json());
}

function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json());
}

const allData = Promise.all([
    getTodo(),
    getUser()
]);

allData
    .then(data => console.log('Promise.all:', data))
    .catch(error => console.log(error));


const raceData = Promise.race([
    getTodo(),
    getUser()
]);

raceData
    .then(data => console.log('Promise.race:', data))
    .catch(error => console.log(error));