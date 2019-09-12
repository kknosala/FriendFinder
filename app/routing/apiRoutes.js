var friendArry = require('../data/friends');

module.exports = function(app) {
    
    app.get('/api/friends', function(req, res) {
        res.json(friendArry);
    })

    app.post('/api/friends', function(req, res) {
        friendArry.push(req.body);
    })
    
}