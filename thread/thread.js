const {
    isMainThread,
    workerData,
    Worker
} = require("worker_threads");

if (isMainThread) {
    console.log(`Main Thread! Process ID: ${process.pid}`);
    new Worker(__filename, {
        workerData: [1, 5, 6, 3]
    });
    new Worker(__filename, {
        workerData: [9, 5, 7, 0]
    });
}
else {
    console.log(`Worker Thread! Process ID: ${process.pid}`);
    console.log(`${workerData} after sort ${workerData.sort()}`);
}