const { Team } = require('../Team');

describe('Team', () => {
  let team;

  beforeEach(() => {
    team = new Team({
      name: 'Ducks',
      wins: 6,
      losses: 2,
      overtimeLosses: 2,
    });
  });

  it('The `Team` has a name attribute', () => {
    expect(team.name).toEqual('Ducks');
  });

  it('The `Team` has a wins attribute', () => {
    expect(team.wins).toEqual(6);
  });

  it('The `Team` has a losses attribute', () => {
    expect(team.losses).toEqual(2);
  });

  it('The `Team` has an overtimeLosses attribute ', () => {
    expect(team.overtimeLosses).toEqual(2);
  });
});
