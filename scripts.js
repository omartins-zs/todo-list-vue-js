// var todos = [
//     {
//         text: "Aprender o básico de Vue JS",
//         done: true,
//     },
//     {
//         text: "Aprender HTML, CSS e Javascript",
//         done: false,
//     },
// ];

const todosApp = {
    data() {
        return {
            todos: [],
            newTodo: {
                done: false,
            },
        };
    },
    methods: {
        addTodo: function () {
            if (this.newTodo.text) {
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false,
                };
                localStorage.setItem("todos", JSON.stringify(this.todos));
            } else {
                alert("O texto da tarefa e obrigatoria");
            }
        },
    },
};

Vue.createApp(todosApp).mount("#app");
