type Resolve<T> = (value?: T | MyPromise<T>) => void;
type Reject = (reason?: any) => void;
type Executor<T> = (resolve: Resolve<T>, reject: Reject) => void;

// Promise 的三种状态
enum PromiseState {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

export class MyPromise<T> {
  private state: PromiseState = PromiseState.PENDING; // Promise 的当前状态
  private value?: T; // 存储Promise成功时的值
  private reason?: any; // 存储Promise失败时的原因
  private onFulfilledCallbacks: ((value: T) => void)[] = []; // 存储成功的回调
  private onRejectedCallbacks: ((reason: any) => void)[] = []; // 存储失败的回调

  constructor(executor: Executor<T>) {
    const resolve: Resolve<T> = (value) => {
      // 使用setTimeout确保回调的异步性
      setTimeout(() => {
        if (this.state === PromiseState.PENDING) {
          this.state = PromiseState.FULFILLED;
          this.value = value as T;
          this.onFulfilledCallbacks.forEach((callback) =>
            callback(this.value!)
          );
        }
      });
    };

    const reject: Reject = (reason) => {
      setTimeout(() => {
        if (this.state === PromiseState.PENDING) {
          this.state = PromiseState.REJECTED;
          this.reason = reason;
          this.onRejectedCallbacks.forEach((callback) => callback(this.reason));
        }
      });
    };

    try {
      executor(resolve, reject); // 执行executor
    } catch (error) {
      reject(error); // 如果executor执行出错，将错误原因reject
    }
  }

  then<TResult1 = T, TResult2 = never>(
    onFulfilled?: (value: T) => TResult1 | MyPromise<TResult1>,
    onRejected?: (reason: any) => TResult2 | MyPromise<TResult2>
  ): MyPromise<TResult1 | TResult2> {
    return new MyPromise<TResult1 | TResult2>((resolve, reject) => {
      // 成功态的回调
      const handleFulfilled = (value: T) => {
        try {
          // 执行成功回调，或者直接返回value
          const result = onFulfilled ? onFulfilled(value) : value;
          if (result instanceof MyPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result as unknown as TResult1);
          }
        } catch (error) {
          reject(error);
        }
      };

      // 失败态的回调
      const handleRejected = (error: any) => {
        try {
          if (onRejected) {
            const result = onRejected(error);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result as unknown as TResult1);
            }
          } else {
            reject(error);
          }
        } catch (catchError) {
          reject(catchError);
        }
      };

      if (this.state === PromiseState.FULFILLED) {
        // 异步执行成功回调
        setTimeout(() => handleFulfilled(this.value!), 0);
      } else if (this.state === PromiseState.REJECTED) {
        // 异步执行失败回调
        setTimeout(() => handleRejected(this.reason), 0);
      } else {
        // 将成功和失败的回调存储起来
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }

  // MyPromise.all静态方法，用于处理多个Promise并发
  static all<T>(promises: MyPromise<T>[]): MyPromise<T[]> {
    return new MyPromise<T[]>((resolve, reject) => {
      const result: T[] = []; // 存储每个Promise的结果
      let count = 0; // 计数器，用于判断所有Promise是否都已经完成

      promises.forEach((promise, index) => {
        promise.then(
          (value) => {
            result[index] = value; // 将每个Promise的结果存储到result中
            count++;
            // 如果所有Promise都已经完成，则resolve
            if (count === promises.length) {
              resolve(result);
            }
          },
          (reason) => {
            reject(reason); // 如果有一个Promise失败，则reject
          }
        );
      });
    });
  }
}
