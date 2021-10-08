export default `
  type Belongs @relation(name: "BELONGS") {
    score: Int!
    from: Team
    to: Rank
  }
`;
