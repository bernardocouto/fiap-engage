export default `
  type Team {
    id: Int!
    name: String!
    ranks: [Belongs]
    users: [PlayerTeam]
  }
`;
