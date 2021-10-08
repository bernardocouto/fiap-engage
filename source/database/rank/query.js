export default `
  GetRankById(id: Int!): Team @cypher(statement: "MATCH (r:Rank) WHERE r.id = $id RETURN r")
`;
