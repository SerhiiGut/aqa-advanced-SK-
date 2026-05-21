class TodoService {

    async getTodo() {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1'
        );

        return response.json();
    }
}


class UserService {

    async getUser() {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users/1'
        );

        return response.json();
    }
}

const todo = new TodoService();
const user = new UserService();

todo.getTodo().then(data => console.log(data));
user.getUser().then(data => console.log(data));