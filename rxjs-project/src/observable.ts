import { Observable, from } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');
observable$.subscribe({
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  }
});
console.log('just after subscribe');

const observable2$ = from([1, 3, 5]);

observable2$.subscribe(value => {
  console.log('observable2$:', value);
});

const observable3$ = new Observable((subscriber) => {
  const intervalID = setInterval(() => {
    subscriber.next('Hi');
  }, 1000);
});

const subscription = observable3$.subscribe((value) => {
  console.log('observable3$', value);
});

setTimeout(() => {
  console.log('Stop receive');
  subscription.unsubscribe();
}, 5000);