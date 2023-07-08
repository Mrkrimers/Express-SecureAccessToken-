const pool = require(`../db`);

async function getAllUsersDB() {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);

        const sql = `SELECT * FROM users`
        const data = (await client.query(sql)).rows;

        await client.query(`COMMIT`);

        return data;
    } catch (err) {
        await client.query(`ROLLBACK`);
        console.log(`getAllUsersDB: ${err.message}`);

        return []
    }
}

async function postCreateUserDB(name, surname, email, pwd) {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);

        const sql = `INSERT INTO users (name, surname, email, pwd)
        VALUES ($1,$2,$3,$4) RETURNING *`
        const data = (await client.query(sql, [name, surname, email, pwd])).rows

        await client.query(`COMMIT`);

        return data;
    } catch (err) {
        await client.query(``)
        console.log(`postCreateUserDB: ${err.message}`);

        return []
    }
}


module.exports = { getAllUsersDB, postCreateUserDB }