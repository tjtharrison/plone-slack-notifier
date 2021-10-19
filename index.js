const Tail = require("tail").Tail

// Slack config
var MY_SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOOK;
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);

// Logfile
logFile="/opt/plone/zinstance/var/log/instance.log"

tail = new Tail(logFile);

// Start Watcher
console.log("Watching" + logFile);
tail.on("line", function(data) {
    if(data.indexOf("new_devops_page") >= 0) {
        var creator = data.split(/[_]+/).pop();
        var document = data.substring(
            data.lastIndexOf("<") +1,
            data.lastIndexOf(">")
        );
        var message = "New Devops " + document + " Created by " + creator 
        console.log(message);
        slack.send({
            channel: "#sysadmin-team",
            text: message
        });
    };
});
  