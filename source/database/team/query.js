export default `
  GetTeamById(id: Int!): Team @cypher(statement: "MATCH (t:Team) WHERE t.id = $id RETURN t")
`;
