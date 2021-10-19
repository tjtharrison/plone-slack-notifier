#!/bin/bash

if ps aux | grep -q "plone-slack-notify"; then
    s=0
    st="Plone Notify is running"
else
    s=2
    st="Plone Notify is not running!"
fi

echo "$s plone_notifier varname=2;crit $st"
