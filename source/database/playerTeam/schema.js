export default `
  type PlayerTeam @relation(name: "PLAYER_TEAM") {
    score: Int!
    from: User
    to: Team
  }
`;
