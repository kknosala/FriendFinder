var friendArry = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendArry);
  });

  app.post("/api/friends", function(req, res) {
    var targetScore = 0;
    var friendScores = [];

    for (i = 0; i < friendArry.length; i++) {
      var compareTotal = 0;
      for (j = 0; j < req.body.scores.length; j++) {
        var userNumber = req.body.scores[j];
        var compareNumber = friendArry[i].scores[j];
        var absoluteDiff = Math.abs(Number(userNumber) - compareNumber);
        compareTotal += absoluteDiff;
      }
      friendScores.push(compareTotal);
    }

    var minDiff = 1000;
    var bestMatch;
    for (i = 0; i < friendScores.length; i++) {
      var m = Math.abs(targetScore - friendScores[i]);
      if (m < minDiff) {
        minDiff = m;
        bestMatch = friendArry[i];
      }
    }
    res.json(bestMatch);
    friendArry.push(req.body);
  });
};
