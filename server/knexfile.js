// Update with your config settings.
module.exports = {
    development: {
        client:"pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory:'./db/migrations'
        }
    },
    test: {
        client: 'pg',
        connection:'postgres://localhost/secrets_test',
        migrations: {
            directory: './db/migrations'
        },
        pool: {
            min: 2,
            max: 10
        },
        seeds: {
            directory: './seeds/test'
        }

    },
    production: {
        client: 'pg',
        connection: "process.env.DATABASE_URL",
        migrations: {
            directory: './db/migrations'
        },
        pool: {
            min: 2,
            max: 10
        }

    }
};





