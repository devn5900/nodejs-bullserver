# Node.js BullMQ Example

This project demonstrates how to use [BullMQ](https://docs.bullmq.io/) with Node.js to manage background jobs and queues. It uses Express for the server, BullMQ for job management, and Redis as the backend.

## Features

- Queue jobs with custom data, priorities, and delays
- Worker processes jobs and handles success/failure
- Example job: converting jpg to pdf (see `bull/jobs/RunFirstJob.js`)
- Modular structure for easy extension

## Project Structure

The main entry point for this project is the `index.js` file. To see the job queue in action and test the setup, follow these steps:

1. **Start Redis**  
   Make sure you have a Redis server running locally or update the Redis connection settings in `bull/config.js` as needed.

2. **Run the Worker**  
   In one terminal, start the worker to process jobs:

   ```
   node bull/Worker.js
   ```

   This will listen for jobs added to the queue and process them using the logic defined in `bull/jobs/RunFirstJob.js`.

3. **Run the Index File**  
   In another terminal, run:

   ```
   node index.js
   ```

   This will enqueue 10 jobs with different priorities and delays. Each job simulates a "convert jpg to pdf" task.

4. **Observe Output**
   - The worker terminal will log job processing, completion, or failure.
   - The index terminal will log when each task is added to the queue.

**Tip:**  
You can modify `index.js` to add different jobs, change job data, or experiment with priorities and delays to better understand how BullMQ handles job queuing and processing.
