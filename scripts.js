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
            todos: window.todos,
            newTodo: {
                done:false
            }
        }
    },
    methods:{
        addTodo: function(){
            this.todos.push(this.newTodo);
            this.newTodo = {
                done:false
            };
        }
    }
};

Vue.createApp(todosApp).mount('#app')