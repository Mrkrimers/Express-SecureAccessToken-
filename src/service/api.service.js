const { getAllUsersDB, postCreateUserDB } = require(`../repository/api.repositiry`);

async function getAllUsers() {
    const data = await getAllUsersDB();
    if (!data.length) throw new Error(`DB is EMPTY`)

    return data;
}

async function postCreateUser(name, surname, email, pwd) {
    const data = await postCreateUserDB(name, surname, email, pwd);
    if (!data.length) throw new Error(`User not created`);

    return data;
}


module.exports = { getAllUsers, postCreateUser };