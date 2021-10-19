# Plone Slack notifier

A NodeJS Watcher of Plone logs to notify Slack channel when a new DevOps item is created

# Installation

```
npm install
```

# Running the Watcher

```
cd /scripts/plone-slack-notifier && screen -dmS plone-slack-notify node index.js
```

# Monitoring Script

Create a symbolic link to the Check_MK agent  local directory to ensure the watcher is running before reindexing the host

```
ln -s plone_watcher_slack_check.sh /usr/lib/check_mk_agent/local/
```