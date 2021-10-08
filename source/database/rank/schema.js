export default `
  type Rank {
    id: Int!
    name: String!
    teams: [Belongs]
    users: [PlayerRank]
  }
`;
