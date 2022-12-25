const DefaultNamingStrategy = require('typeorm').DefaultNamingStrategy
const snakeCase = require('typeorm/util/StringUtils').snakeCase
const pluralize = require('pluralize')

module.exports = class TypeOrmNamingStrategy extends DefaultNamingStrategy {
  tableName(className, customName) {
    return customName || pluralize(snakeCase(className))
  }

  columnName(propertyName, customName, embeddedPrefixes) {
    return (
      snakeCase(embeddedPrefixes.join('_')) +
      (customName || snakeCase(propertyName))
    )
  }

  relationName(propertyName) {
    return snakeCase(propertyName)
  }
  
  /* 以下同様にオーバーライドします */
}