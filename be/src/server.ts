import "reflect-metadata";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from "type-graphql";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [__dirname + "/**/*.resolver.{ts,js}"],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
}

bootstrap();