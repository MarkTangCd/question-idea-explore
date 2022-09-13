import { timer, combineLatest, fromEvent } from 'rxjs';
import { mapTo, startWith, scan, tap, map } from 'rxjs/operators';

const redTotal = document.getElementById('red-total');
const blackTotal = document.getElementById('black-total');
const total = document.getElementById('total');

const addOneClick$ = (id: string) =>
  fromEvent(document.getElementById(id), 'click').pipe(
    mapTo(1),
    scan((acc, curr) => acc + curr, 0),
    startWith(0)
  );

combineLatest(addOneClick$('red'), addOneClick$('black')).subscribe(
  ([red, black]: any) => {
    redTotal.innerHTML = red;
    blackTotal.innerHTML = black;
    total.innerHTML = red + black;
  }
);

// const timerOne$ = timer(1000, 4000);
// const timerTwo$ = timer(2000, 4000);
// const timerThree$ = timer(3000, 4000);

// combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(
//   ([timerValOne, timerValTwo, timerValThree]) => {
//     console.log(
//       `Timer One Latest: ${timerValOne},
//       Timer Two Latest: ${timerValTwo},
//       Timer Three Latest: ${timerValThree}
//       `
//     );
//   }
// );

// combineLatest(
//   timerOne$,
//   timerTwo$,
//   timerThree$,
//   // combineLatest also takes an optional projection function
//   (one, two, three) => {
//     return `Timer One (Proj) Latest: ${one}, 
//               Timer Two (Proj) Latest: ${two}, 
//               Timer Three (Proj) Latest: ${three}`;
//   }
// ).subscribe(console.log);