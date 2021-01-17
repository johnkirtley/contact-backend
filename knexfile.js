// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://john:pass@postgres-6003ef84a63cac991f9bf0a4.c.6001421cc73ea88e8147c139.cycle.io:5432/postgres',
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgres://john:pass@postgres-6003ef84a63cac991f9bf0a4.c.6001421cc73ea88e8147c139.cycle.io:5432/postgres',
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

};
