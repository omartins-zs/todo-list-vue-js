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
    beforeCreate() {
        console.log("Before creted");
    },
    created() {
        console.log("Created");
    },
    beforeUpdate() {
        console.log("Before Updated");
    },
};

Vue.createApp(todosApp).mount("#app");
