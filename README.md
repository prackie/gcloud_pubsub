# gcloud_pubsub
Example of google cloud pub/sub on nodejs
(Please note that you have to download "service.json" from your gcloud project then put it to here first)

## Create topic
node createTopic.js

## subscribe 
node pull.js

## publish 
node pub.js

#Step
1) create topic
2) run subscribe (timeout 60s)
3) run publish
4) wait and see, the message are coming to terminal (or on google cloud console as well)
