const fs = require('fs');
const { PointsCalculator } = require('./PointsCalculator');

class League {
  constructor({ teams = [], calculator = new PointsCalculator() } = {}) {
    this.teams = teams;
    this.calculator = calculator;
  }

  scoresOf(teamName) {
    const candidate = this.teams.find(({ name }) => name === teamName);
    return this.calculator.pointsForTeam(candidate);
  }

  standings() {
    return Array.from(this.teams).sort(
      (a, b) => this.scoresOf(b.name) - this.scoresOf(a.name),
    );
  }

  async writeStandings(file) {
    const standings = this.standings();
    const filePromises = [];

    for (let i = 0; i < standings.length; i += 1) {
      const { name } = standings[i];
      const data = `${i + 1}. ${name} - ${this.scoresOf(name)} points\n`;
      filePromises.push(fs.promises.appendFile(file, data, 'utf-8'));
    }

    await Promise.all(filePromises);
  }
}

module.exports = { League };
