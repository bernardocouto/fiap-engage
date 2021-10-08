export default `
  type User {
    id: Int!
    name: String!
    ranks: [PlayerRank]
    teams: [PlayerTeam]
  }
`;
