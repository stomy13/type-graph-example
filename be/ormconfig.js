const TypeOrmNamingStrategy = require('./TypeOrmNamingStrategy.js')

module.exports = [
  {
    namingStrategy: new TypeOrmNamingStrategy(),
    synchronize: false,
    entities: ['src/entities/*.ts'],
    migrations: ['migrations/**/*.ts'],
    cli: {
      entitiesDir: 'src/entities',
      migrationsDir: 'migrations',
    },
  },
]