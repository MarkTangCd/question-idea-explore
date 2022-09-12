import { Observable, observeOn, asyncScheduler } from 'rxjs';

const observable$ = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
}).pipe(
  observeOn(asyncScheduler)
);

const finalObserver = {
  next(x: number) {
    console.log('got value ' + x);
  },
  error(err: any) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  }
}

console.log('just before subscribe');
observable$.subscribe(finalObserver);
console.log('just after subscribe');