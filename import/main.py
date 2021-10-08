from neo4j import GraphDatabase

import random

driver = GraphDatabase.driver("neo4j://localhost:7687", auth=('neo4j', 'fiap-engage'))


def create_rank(tx, id, name):
    tx.run(
        """
            CREATE (r:Rank { id: $id, name: $name })
        """,
        id=id,
        name=name
    )


def create_team(tx, id, name, score, rank_id):
    tx.run(
        """
            MATCH (r:Rank) WHERE r.id = $rank_id
            MERGE (t:Team { id: $id, name: $name })-[b:BELONGS { score: $score }]->(r)
        """,
        id=id,
        name=name,
        score=score,
        rank_id=rank_id
    )


def create_user(tx, id, name, score, rank_id, team_id):
    tx.run(
        """
            MATCH (r:Rank) WHERE r.id = $rank_id
            MATCH (t:Team) WHERE t.id = $team_id
            MERGE (r)<-[:PLAYER_RANK { score: $score }]-(u:User { id: $id, name: $name })-[p:PLAYER_TEAM { score: $score }]->(t)
        """,
        id=id,
        name=name,
        score=score,
        rank_id=rank_id,
        team_id=team_id
    )


def main():
    with driver.session() as session:
        for _rank in range(5):
            session.write_transaction(
                create_rank,
                _rank,
                f'Rank {_rank}'
            )
            for _team in range(50):
                session.write_transaction(
                    create_team,
                    _team,
                    f'Team {_team}',
                    random.randint(0, 1000),
                    _rank
                )
                for _user in range(500):
                    session.write_transaction(
                        create_user,
                        _user,
                        f'User {_user}',
                        random.randint(0, 10000),
                        _rank,
                        _team
                    )
                    print(f'Rank: {_rank} - Team: {_team} - User: {_user}')
        driver.close()


if __name__ == '__main__':
    main()
