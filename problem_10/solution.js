/*
    This problem was asked by Apple.

    Implement a job scheduler which takes in a function f
    and an integer n, and calls f after n milliseconds.
 */

function scheduler(f, n) {
    const requestTime = new Date().getTime();
    const completeTime = requestTime + n;
    while (true) {
        if (new Date().getTime() >= completeTime) {
            f();
            break;
        }
    }
}

scheduler(() => console.log('first'), 2000);
scheduler(() => console.log('second'), 1000);
scheduler(() => console.log('third'), 1500);
