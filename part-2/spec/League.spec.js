const path = require('path');
const fs = require('fs');
const { Team } = require('../Team');
const { PointsCalculator } = require('../PointsCalculator');
const { League } = require('../League');

describe('League', () => {
  let blues;
  let capitals;
  let coyotes;
  let ducks;
  let flames;
  let jets;
  let penguins;
  let redWings;
  let teams = [];

  let calculator;

  let league;

  beforeAll(() => {
    blues = new Team({
      name: 'Blues',
      wins: 7,
      losses: 2,
      overtimeLosses: 1,
    });
    capitals = new Team({
      name: 'Capitals',
      wins: 5,
      losses: 4,
      overtimeLosses: 1,
    });
    coyotes = new Team({
      name: 'Coyotes',
      wins: 1,
      losses: 6,
      overtimeLosses: 3,
    });
    ducks = new Team({
      name: 'Ducks',
      wins: 6,
      losses: 0,
      overtimeLosses: 4,
    });
    flames = new Team({
      name: 'Flames',
      wins: 3,
      losses: 7,
      overtimeLosses: 0,
    });
    jets = new Team({
      name: 'Jets',
      wins: 9,
      losses: 0,
      overtimeLosses: 1,
    });
    penguins = new Team({
      name: 'Penguins',
      wins: 4,
      losses: 4,
      overtimeLosses: 2,
    });
    redWings = new Team({
      name: 'Red Wings',
      wins: 8,
      losses: 2,
      overtimeLosses: 1,
    });
    teams = [blues, capitals, coyotes, ducks, flames, jets, penguins, redWings];

    calculator = new PointsCalculator();
    league = new League({ teams, calculator });
  });

  it('`league` has an teams attribute', () => {
    expect(league.teams).toEqual(teams);
  });

  it('`league` has an attribute calculator', () => {
    expect(league.calculator).toEqual(calculator);
  });

  describe('method of the class standings() of `League`', () => {
    it('does not mutate the original array of commands', () => {
      const oldTeams = [...teams];
      league.standings();
      expect(teams).toEqual(oldTeams);
    });

    it('returns a list of teams sorted by points in descending order', () => {
      expect(league.standings()).toEqual([
        jets,
        redWings,
        ducks,
        blues,
        capitals,
        penguins,
        flames,
        coyotes,
      ]);
    });
  });

  describe('writeStandings() class method of `League', () => {
    const file = path.join(__dirname, 'league.txt');

    afterEach(() => {
      // after each test, delete the file league.txt
      if (fs.existsSync(file)) fs.unlinkSync(file);
    });

    it('does not use synchronous methods fs', () => {
      expect(league.writeStandings.toString()).not.toContain('Sync');
    });

    it('returns promise', () => {
      const promise = league.writeStandings(file);
      expect(promise).toBeInstanceOf(Promise);
      return promise;
    });

    it('saves a sorted list of commands to a file', async () => {
      await league.writeStandings(file);
      expect(fs.readFileSync(file, 'utf-8').trim()).toBe(
        `1. Jets - 19 points
2. Red Wings - 17 points
3. Ducks - 16 points
4. Blues - 15 points
5. Capitals - 11 points
6. Penguins - 10 points
7. Flames - 6 points
8. Coyotes - 5 points`,
      );
    });
  });

  describe('scoresOf() class method of `League', () => {
    it('returns the number of team points by the name of the team passed as an argument to the method', () => {
      expect(league.scoresOf('Jets')).toEqual(19);
      expect(league.scoresOf('Flames')).toEqual(6);
    });
  });
});
