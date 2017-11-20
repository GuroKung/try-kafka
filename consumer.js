const kafka = require("kafka-node"),
  Consumer = kafka.Consumer,
  client = new kafka.Client(),
  consumer = new Consumer(
    client,
    [{ topic: "topic1", partition: 0 }, { topic: "topic2", partition: 0 }],
    {
      autoCommit: false
    }
  );

consumer.on("message", message => {
  console.log("Receive message", message);
});

consumer.on("error", err => console.error(err));
