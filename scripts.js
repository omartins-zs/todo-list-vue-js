var todos = [
    {
        text: 'Aprender o básico de Vue JS',
        done: true
    },
    {
        text: 'Aprender HTML, CSS e Javascript',
        done: false
    }
]

const todosApp = {
    data() {
        return {
            todos: window.todos
        }
    }
};

Vue.createApp(todosApp).mount('#app')