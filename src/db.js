const { Pool } = require(`pg`);

const pool = new Pool({
    password: `159alex951`,
    database: `university`,
    user: `postgres`,
    host: `localhost`,
    port: `5432`
})

module.exports = pool 