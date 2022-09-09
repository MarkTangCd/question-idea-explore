import { interval } from 'rxjs';

// const observable = interval(1000);
// const subscription = observable.subscribe(x => console.log(x));
// subscription.unsubscribe();

const observable1$ = interval(400);
const observable2$ = interval(300);

const subscription = observable1$.subscribe(x => console.log('first: ' + x));
const childSubscription = observable2$.subscribe(x => console.log('second: ' + x));

subscription.add(childSubscription);

setTimeout(() => {
  subscription.unsubscribe();
}, 1000);