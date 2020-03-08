import axios from 'axios'

class TodoDataService {
    retrieveAllTodos(name) {
        return axios.get(`http://localhost:8080/users/${name}/todos`)
        //console.log('executed service')
    }

    deleteTodo(name,id){
        console.log(`http://localhost:8080/users/${name}/todos/${id}`);
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }

    updateTodo(name,id){
        console.log(`http://localhost:8080/users/${name}/todos/${id}`);
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`)
    }

    retrieveTodo(name,id) {
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`)
        //console.log('executed service')
    }

    
}
export default new TodoDataService()