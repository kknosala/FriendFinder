# FriendFinder
The Friend Finder app is designed to help people locate and make friends with new people from all around the world. Users simply need to take the survey on the app and the Friend Finder algorithm will match them with their potential best friend based on the information present in the database.

A live demo of this project can be found deployed on [Heroku](https://agile-plateau-67726.herokuapp.com/)

## Landing Page
The landing page is the first page that users will see. It is designed to breifly describe the app and its purpose. The users will then be prompted to click the link that will take them to the survey page where they can find their new best friend.

## Survey
The survey is designed to get the information necessary for the algorithm to work its magic and pair the user with their best friend. The survey is broken up into two parts.

### User Information
Some basic information is required from the user before the survey can be submitted.
Users are required to submit the following:
* Name
* Picture
This information will be put into the database after the survey is submitted and displayed to any potential future matches.

### Friend Finder Survey
The survey section is where the user will need to answer a few questions about themselves to gather the data necessary to match them with another person. These questions are similar to questions asked during typical personality tests and the user will rank their agreement with the statement with 1 being completely disagree to 5 being completely agree.
Once the questions are answered, the user simply has to submit by clicking on the "Find My Friend" button. After submitting, a modal will appear with their match's name and profile picture.

## How It All Works
The algorithm will compare each answer the user made with the answers of every user already in the database. It will then find the sum of the absolute differences between their answers.
Here is the code used for this comparison:
```javascript
var friendScores = [];
    // friendArry is the name of the object the database is pulled into.
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
```
Once the absolute differences have been calculated, the algorithm will then find the score with the smalled difference and report that back to the user with the following code:
```javascript
var targetScore = 0;
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
```

## Future Expansion
This app would work better with a larger seed of data to allow for more possible results. This will likely occur naturally as more people use it.

A user login and profile would be key to expansion. This would allow users to link together and allow the site to become a full social platform. This would also be a way for existing users to see any current matches. Including some sort of messaging program would be key.
