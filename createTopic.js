require('dotenv').config();
const PubSub = require(`@google-cloud/pubsub`);

const pubsub = new PubSub();

pubsub
  .createTopic('topic1')
  .catch(err => {
    console.error('ERROR:', err);
  });

  console.log('created')