import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface TODO {
    id: number;
    title: String;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as TODO;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

const logTodo = (id: number, title: String, completed: boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
        `);
}