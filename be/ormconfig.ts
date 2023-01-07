import { DataSource } from "typeorm";
// const TypeOrmNamingStrategy = require('./TypeOrmNamingStrategy.js')

// module.exports = [
//   {
//     type: "mysql", // これに応じて設定項目が変わる(TypeScriptの型が変わる)
//     host: "localhost",
//     username: "root",
//     password: "root", // 環境変数より取得
//     port: 3306,
//     logging: true, // SQLログ
//     database: "example",
//     dropSchema: true, // スキーマ削除(開発用)
//     namingStrategy: new TypeOrmNamingStrategy(),
//     synchronize: false,
//     entities: ['src/entities/*.ts'],
//     migrations: ['migrations/**/*.ts'],
//     cli: {
//       entitiesDir: 'src/entities',
//       migrationsDir: 'migrations',
//     },
//   },
// ]

export const connectionSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'example',
  dropSchema: true, // スキーマ削除(開発用)
  logging: false,
  // namingStrategy: new TypeOrmNamingStrategy(),
  synchronize: false,
  entities: ['src/entities/*{.ts,.js}'],
  migrations: ['migrations/*{.ts,.js}'],
  subscribers: ['subscriber/*{.ts,.js}'],
});
