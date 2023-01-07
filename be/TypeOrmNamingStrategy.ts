// const DefaultNamingStrategy = require('typeorm').DefaultNamingStrategy
// const snakeCase = require('typeorm/util/StringUtils').snakeCase
// const pluralize = require('pluralize')

// module.exports = class TypeOrmNamingStrategy extends DefaultNamingStrategy {
//   tableName(className: string, customName: string) {
//     return customName || pluralize(snakeCase(className))
//   }

//   columnName(propertyName: string, customName: string, embeddedPrefixes: string) {
//     return (
//       snakeCase(embeddedPrefixes.join('_')) +
//       (customName || snakeCase(propertyName))
//     )
//   }

//   relationName(propertyName: string) {
//     return snakeCase(propertyName)
//   }

//   /* 以下同様にオーバーライドします */
// }