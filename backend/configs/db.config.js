const dbConfig = {
    host: "localhost",
    port: 5432, //or whichever port db is running
    user: "db_username",
    password: "db_password",
    database: "db_schema",

    dialect: "postgres", //or other dialect as per sequelize
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
