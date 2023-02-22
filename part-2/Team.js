class Team {
  constructor({
    losses = 0,
    name = '',
    overtimeLosses = 0,
    wins = 0,
  } = {}) {
    this.losses = losses;
    this.name = name;
    this.overtimeLosses = overtimeLosses;
    this.wins = wins;
  }
}

module.exports = { Team };
