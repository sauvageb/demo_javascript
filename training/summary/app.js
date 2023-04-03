import {UserService} from "./services/user.service.js";

const userListContainer = document.getElementById('users');
const userService = new UserService();

userService
    .getUsers()
    .then(data => displayUserList(data));

const displayUserList = (users) => {
    users.forEach(user => displayOneUser(user));
}

const displayOneUser = (user) => {
    const card = `
    <div class="col">
        <div class="card">
            <img src="${user.picture}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${user.firstname} - ${user.lastname}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>`;
    userListContainer.innerHTML += card;
}
