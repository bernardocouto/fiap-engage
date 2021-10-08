import belongs from './belongs';
import playerTeam from './playerTeam';
import playerRank from './playerRank';
import rank from './rank';
import team from './team';
import user from './user';

import { makeAugmentedSchema } from 'neo4j-graphql-js';

const mutations = ``;

const queries = `
  type Query {
    ${rank.query}
    ${team.query}
    ${user.query}
  }
`;

const resolver = {
  Query: Object.assign(
    rank.resolver.Query,
    team.resolver.Query,
    user.resolver.Query
  )
};

const schema = makeAugmentedSchema({
  config: {
    mutation: true,
    query: true
  },
  resolvers: resolver,
  typeDefs: [
    belongs.schema,
    playerRank.schema,
    playerTeam.schema,
    rank.schema,
    team.schema,
    user.schema,
    mutations,
    queries
  ].join('')
});

export { resolver, schema };
