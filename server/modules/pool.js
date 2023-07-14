const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();
let pool;

// When our app is deployed to the internet
// we'll use the DATABASE_URL environment variable
// to set the connection info: web address, username/password, db name
// eg:
//  DATABASE_URL=postgresql://jDoe354:secretPw123@some.db.com/prime_app
if (process.env.DATABASE_URL) {
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
}
// When we're running this app on our own computer
// we'll connect to the postgres database that is
// also running on our computer (localhost)
else {
  pool_args = {
    host: "localhost",
    port: 5432,
    database: "giphy_search_favorites",
  };

  if (process.env.DB_USER) {
    pool_args.user = process.env.DB_USER;
  }
  if (process.env.DB_PASSWORD) {
    pool_args.password = process.env.DB_PASSWORD;
  }

  pool = new pg.Pool(pool_args);
}

// pool.query("SELECT * FROM category;")
//   .then(result => result.rows)
//   .then(console.log)
//   .catch(console.error);

module.exports = pool;