import { AsyncSubject } from 'rxjs';
const subject$ = new AsyncSubject();

subject$.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

subject$.next(1);
subject$.next(2);
subject$.next(3);
subject$.next(4);

subject$.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject$.next(5);
subject$.complete();

// const subject$ = new ReplaySubject(100, 500); // buffer 3 values for new subscribers

// subject$.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });

// let i = 1;
// setInterval(() => subject$.next(i++), 200);

// setTimeout(() => {
//   subject$.subscribe({
//     next: (v) => console.log(`observerB: ${v}`)
//   });
// }, 1000);

// subject$.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });

// subject$.next(1);
// subject$.next(2);
// subject$.next(3);
// subject$.next(4);

// subject$.subscribe({
//   next: (v) => console.log(`observerB: ${v}`)
// });

// subject$.next(5);

// subject$.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });

// subject$.next(1);
// subject$.next(2);

// subject$.subscribe({
//   next: (v) => console.log(`observerB: ${v}`)
// });

// subject$.next(3);

// const source$ = interval(500);
// const subject$ = new Subject();
// const refCounted$ = source$.pipe(multicast(subject$), refCount());
// let subscription1: Subscription;
// let subscription2: Subscription;

// console.log('observerA subscribed');
// subscription1 = refCounted$.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });

// setTimeout(() => {
//   console.log('observerB subscribed');
//   subscription2 = refCounted$.subscribe({
//     next: (v) => console.log(`observerB: ${v}`)
//   });
// }, 600);

// setTimeout(() => {
//   console.log('observerA unsubscribed');
//   subscription1.unsubscribe();
// }, 1200);

// setTimeout(() => {
//   console.log('observerB unsubscribed');
//   subscription2.unsubscribe();
// }, 2000);

// const source$ = from([1, 2, 3]);
// const multicasted$ = source$.pipe(multicast(() => new Subject())) as ConnectableObservable<number>;

// // These are, under the hood, `subject.subscribe({...})`:
// multicasted$.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });
// multicasted$.subscribe({
//   next: (v) => console.log(`observerB: ${v}`)
// });

// // This is, under the hood, `source.subscribe(subject)`:
// multicasted$.connect();