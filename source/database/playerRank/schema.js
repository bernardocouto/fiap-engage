export default `
  type PlayerRank @relation(name: "PLAYER_RANK") {
    score: Int!
    from: User
    to: Rank
  }
`;
