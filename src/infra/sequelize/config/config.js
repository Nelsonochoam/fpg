import { Sequelize } from 'sequelize'

const credentials = {
    "username": "postgres",
    "password": "postgres",
    "database": "fpg",
    "host": "localhost",
    "dialect": "postgres",
    "port": 5432
}

const { username, password, database, host, dialect, port } = credentials;
const connection = new Sequelize(database, username, password, { host, dialect, port })

export default {
    connection
}
