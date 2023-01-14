```
// migration
yarn run typeorm  migration:run -d ormconfig.ts

// check executed sql
docker exec 75688dfedc49 cat /var/lib/mysql/75688dfedc49.log
```