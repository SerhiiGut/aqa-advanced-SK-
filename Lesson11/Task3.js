async function getTodo() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
    );

    return response.json();
}

async function getUser() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    return response.json();
}

async function run() {
    try {

        const allData = await Promise.all([
            getTodo(),
            getUser()
        ]);

        console.log('Promise.all:', allData);

        const raceData = await Promise.race([
            getTodo(),
            getUser()
        ]);

        console.log('Promise.race:', raceData);

    } catch(error) {
        console.log(error);
    }
}

run();