const dbConfig = {
    host: "localhost",
    port: 5432,
    user: "username",
    password: "password",
    database: "db_name",

    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}

module.exports = {
    dbConfig
}