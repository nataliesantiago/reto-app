const APIURL = 'http://localhost:3000/api/';

const listUsers = async () => {
    let urlList = 'users/get-users';
    let users = await fetch(`${APIURL}${urlList}`).then(response => response.json());
    return users;
}

const seeHobbies = async (id) => {
    let urlHobbie = `users/search-hobbie/${id}`;
    let hobbiesUser = await fetch(`${APIURL}${urlHobbie}`, {method: 'POST'}).then(response => response.json())
                    .then(response => response.data);
    return hobbiesUser;
}

const deleteUser = async (id) => {
    let urlDelete = `users/delete-user/${id}`;
    let deleteUser = await fetch(`${APIURL}${urlDelete}`, {method: 'POST'}).then(response => response.json());
    return deleteUser;
}

const getHobbies = async () => {
    let urHobbies = 'hobbies/get-hobbies';
    let hobbies = await fetch(`${APIURL}${urHobbies}`).then(response => response.json())
                .then(response => response.data);
    return hobbies;
}

const addHobbies = async (id, hobbies) => {
    let urlHobbie = `users/add-hobbies/${id}`;
    let newHobbies = await fetch(`${APIURL}${urlHobbie}`, {method: 'POST', body: JSON.stringify({hobbies}),
    headers:{
        'Content-Type': 'application/json'
      }}).then(response => response.json());
    return newHobbies;
}

const checkedHobbies = async (id) => {
    let urlHobbie = `users/search-hobbies-user/${id}`;
    let newHobbies = await fetch(`${APIURL}${urlHobbie}`, {method: 'POST'}).then(response => response.json())
                        .then(response => response.data);
    return newHobbies;
}

const createUser = async (user) => {
    let urlAdd = `users/create-user`;
    let addUser = await fetch(`${APIURL}${urlAdd}`, {method: 'POST', body: JSON.stringify(user),
    headers:{
        'Content-Type': 'application/json'
      }}).then(response => response.json());
    return addUser;
}

const searchUser = async (firstName, lastName) => {
    const BODY = {
        "firstName": firstName,
        "lastName": lastName
    }
    let urlSearch = `users/search-user`;
    let getUser = await fetch(`${APIURL}${urlSearch}`, {method: 'POST', body: JSON.stringify(BODY),
    headers:{
        'Content-Type': 'application/json'
      }}).then(response => response.json());
    return getUser;
}

export {
    listUsers, 
    seeHobbies, 
    deleteUser, 
    getHobbies, 
    addHobbies, 
    checkedHobbies, 
    createUser, 
    searchUser
}
