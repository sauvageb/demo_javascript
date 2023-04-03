import {User} from "../models/user.model.js";

// CRUD :
// Create
// Read
// Update
// Delete
class UserService {

    getUsers = () => {
        return fetch('./data/data.json')
            .then(response => response.json())
            .then(data => data.users.map(u => new User(u.id, u.firstname, u.lastname, u.picture)));
    }

    getUserById = () => {
    }

    deleteUser = () => {
    }

    updateUser = () => {
    }

    createUser = () => {
    }

}

export {UserService};
