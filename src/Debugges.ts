class EnhancedPromise<T> {
  private _promiseState: "pending" | "fulfilled" | "rejected";
  private _promiseResult: T | any;
  private _fulfilledCallbacks: ((value: T) => void)[] = [];
  private _rejectedCallbacks: ((reason: any) => void)[] = [];

  constructor(
    executor: (
      resolve: (value: T) => void,
      reject: (reason: any) => void
    ) => void
  ) {
    this._promiseState = "pending";
    this._promiseResult = undefined;

    const resolve = (value: T) => this._resolve(value);
    const reject = (reason: any) => this._reject(reason);

    executor(resolve, reject);
  }

  private _resolve(value: T) {
    if (this._promiseState === "pending") {
      this._promiseState = "fulfilled";
      this._promiseResult = value;
      for (const callback of this._fulfilledCallbacks) {
        callback(value);
      }
    }
  }

  private _reject(reason: any) {
    if (this._promiseState === "pending") {
      this._promiseState = "rejected";
      this._promiseResult = reason;
      for (const callback of this._rejectedCallbacks) {
        callback(reason);
      }
    }
  }

  then(onFulfilled?: (value: T) => void, onRejected?: (reason: any) => void) {
    const self = this; // Preserve `this` context
    return new EnhancedPromise<T>(function (resolve, reject) {
      function handleFulfilled() {
        if (onFulfilled) {
          try {
            const result = onFulfilled(self._promiseResult);
            resolve(result as T);
          } catch (error) {
            reject(error);
          }
        } else {
          resolve(self._promiseResult);
        }
      }

      function handleRejected() {
        if (onRejected) {
          try {
            const result = onRejected(self._promiseResult);
            resolve(result as T);
          } catch (error) {
            reject(error);
          }
        } else {
          reject(self._promiseResult);
        }
      }

      if (self._promiseState === "fulfilled") {
        handleFulfilled();
      } else if (self._promiseState === "rejected") {
        handleRejected();
      } else {
        self._fulfilledCallbacks.push(handleFulfilled);
        self._rejectedCallbacks.push(handleRejected);
      }
    });
  }

  catch(onRejected: (reason: any) => void) {
    return this.then(undefined, onRejected);
  }
}

const promise = new EnhancedPromise<string>(function (resolve, reject) {
  console.log("Executor starts");
  setTimeout(function () {
    console.log("Fulfilling promise");
    resolve("Hello, world!");
  }, 1000);
});

function onFulfilled(value: string) {
  console.log(`Fulfilled with value: ${value}`);
  return "New Value";
}

function onRejected(reason: any) {
  console.log(`Rejected with reason: ${reason}`);
}

promise
  .then(onFulfilled, onRejected)
  .then(function (newValue) {
    console.log(`Fulfilled again with value: ${newValue}`);
  })
  .catch(onRejected);
