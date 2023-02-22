class PointsCalculator {
  constructor() {
    this.WINS = 2;
    this.LOSSES = 0;
    this.OVERTIME_LOSSES = 1;
  }

  /**
   * @param team
   * @returns count of team points
   */
  pointsForTeam({ wins, losses, overtimeLosses }) {
    return (
      wins * this.WINS + losses * this.LOSSES + overtimeLosses * this.OVERTIME_LOSSES
    );
  }
}

module.exports = { PointsCalculator };
