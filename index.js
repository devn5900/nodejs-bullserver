const TaskQueue = require("./bull/Queue.js");
(async () => {
  for (let i = 0; i < 10; i++) {
    await new TaskQueue()
      .add(
        `RunFirstJob`,
        {
          index: i,
          shouldFail: i % 3 === 0,
        },
        {
          priority: i % 2 === 0 ? 1 : 2,
          delay: i * 1000,
        }
      )
      .then((res) => {
        console.log("resdddddddddddddddd", res.data);
      });

    console.log(`Task-${i} added to the queue.`);
  }
})();
