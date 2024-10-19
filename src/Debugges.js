"use strict";
class EnhancedPromise {
    _promiseState;
    _promiseResult;
    _fulfilledCallbacks = [];
    _rejectedCallbacks = [];
    constructor(executor) {
        this._promiseState = "pending";
        this._promiseResult = undefined;
        const resolve = (value) => this._resolve(value);
        const reject = (reason) => this._reject(reason);
        executor(resolve, reject);
    }
    _resolve(value) {
        if (this._promiseState === "pending") {
            this._promiseState = "fulfilled";
            this._promiseResult = value;
            for (const callback of this._fulfilledCallbacks) {
                callback(value);
            }
        }
    }
    _reject(reason) {
        if (this._promiseState === "pending") {
            this._promiseState = "rejected";
            this._promiseResult = reason;
            for (const callback of this._rejectedCallbacks) {
                callback(reason);
            }
        }
    }
    then(onFulfilled, onRejected) {
        const self = this; // Preserve `this` context
        return new EnhancedPromise(function (resolve, reject) {
            function handleFulfilled() {
                if (onFulfilled) {
                    try {
                        const result = onFulfilled(self._promiseResult);
                        resolve(result);
                    }
                    catch (error) {
                        reject(error);
                    }
                }
                else {
                    resolve(self._promiseResult);
                }
            }
            function handleRejected() {
                if (onRejected) {
                    try {
                        const result = onRejected(self._promiseResult);
                        resolve(result);
                    }
                    catch (error) {
                        reject(error);
                    }
                }
                else {
                    reject(self._promiseResult);
                }
            }
            if (self._promiseState === "fulfilled") {
                handleFulfilled();
            }
            else if (self._promiseState === "rejected") {
                handleRejected();
            }
            else {
                self._fulfilledCallbacks.push(handleFulfilled);
                self._rejectedCallbacks.push(handleRejected);
            }
        });
    }
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
}
const promise = new EnhancedPromise(function (resolve, reject) {
    console.log("Executor starts");
    setTimeout(function () {
        console.log("Fulfilling promise");
        resolve("Hello, world!");
    }, 1000);
});
function onFulfilled(value) {
    console.log(`Fulfilled with value: ${value}`);
    return "New Value";
}
function onRejected(reason) {
    console.log(`Rejected with reason: ${reason}`);
}
promise
    .then(onFulfilled, onRejected)
    .then(function (newValue) {
    console.log(`Fulfilled again with value: ${newValue}`);
})
    .catch(onRejected);
