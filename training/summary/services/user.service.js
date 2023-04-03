// CRUD :
// Create
// Read
// Update
// Delete
class UserService {

    getUsers = () => {
        return fetch('./data/data.json')
            .then(response => response.json());
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
