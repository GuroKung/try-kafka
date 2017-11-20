const kafka = require("kafka-node"),
  HighLevelProducer = kafka.HighLevelProducer,
  client = new kafka.Client(),
  producer = new HighLevelProducer(client),
  payloads = [
    { topic: "topic1", messages: "hi" },
    { topic: "topic2", messages: ["hello", "world"] }
  ];

producer.on("ready", () => {
  producer.send(payloads, (err, data) => {
    if (err) console.error(err);
    console.log(data);
  });
});

producer.on("error", err => console.error(err));
