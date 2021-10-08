export default `
  GetUserById(id: Int!): User @cypher(statement: "MATCH (u:User) WHERE u.id = $id RETURN u")
`;
