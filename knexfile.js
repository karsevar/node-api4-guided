module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/shouts.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};


// post gres connection string:
// postgres://glwfkvvodvkqtn:3ec8558a946b4d40ffb592897ac3b85ef8dc7cb9dceb3bb43a8e77b0223e8ffa@ec2-107-20-167-241.compute-1.amazonaws.com:5432/dabf27v6hd8rs8
// changes multiple times a day 