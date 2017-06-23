var mood = require("./mood");

module.exports = function(app) {
    app.get("/api/:username", function(req, res) {
        mood.get(req.params.username, function(err, userMood) {
            if(err) {
                res.send(err);
            }
            return res.send(userMood);
        });
    });
}