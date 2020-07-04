# vanilla-fe

FE architecture
    1. Router
        - provide a way to create links inside your app
        - provide a way to change views for the user
        - query params, and easy implementation of custom logics
        - it takes care of updating the address bar without actually refreshing the page
    2. State manager | like redux, or models in angular
    3. Business Logic | (services in angular) / or js modules in react
    4. HTTP library | to intract with BE
        XMLHttpRequest, fetch, axios, $http
    5. User Interface Layer | to intract with user

    Additional Features
    6. Cache
    7. Event System/buses, like postman


Model-View-Controller Architecture
    model <----> controller <-----> view

    1. Model - State manager
    2. View - User Interface Layer
    3. Controller - Business Logic

    <body>
      <div id="root"></div>

      <script src="script.min.js"></script>
    </body>

    class Model {
        constructor(){ 
            this.todos = [];
        }

        bindTodoListChanged(callback) { // this will be binded via controller
            this.onTodoListChanged = callback
        }

        // toggle/add/edit/delete
        handleEditTodo() {
            this.todos // do something with it

            this.onTodoListChanged();
        }
    }

    class View {
        constructor(){ 
            let root = document.getElementById('root');
            // add the different UI elements using js
        }

        // add/delete/edit/toggle todo
        bindEditTodoButtonHandlers(handler) { // handler will be provided by controller
            // add dom event listerners and finally call handler
        }

        displayTodos(totos){
            // draw on UI
        }
    }

    class Controller {
      constructor(model, view) {
        this.model = model
        this.view = view

        this.model.bindTodoListChanged(this.handleUpdateTodos);
        this.view.bindEditTodoButtonHandlers(this.handleEditTodo);
      }

      handleUpdateTodos(todos) {
        this.view.displayTodos(todos);
      }

      handleEditTodo() {
        // we can add business logic over here
        this.model.editTodo(id, todoText);
      }
    }

    const app = new Controller(new Model(), new View());