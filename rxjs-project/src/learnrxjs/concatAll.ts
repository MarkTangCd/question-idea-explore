// import { map, concatAll } from 'rxjs/operators';
// import { of, interval } from 'rxjs';

// //emit a value every 2 seconds
// const source = interval(2000);
// const example = source.pipe(
//   //for demonstration, add 10 to and return as observable
//   map(val => of(val + 10)),
//   //merge values from inner observable
//   concatAll()
// );
// //output: 'Example with Basic Observable 10', 'Example with Basic Observable 11'...
// const subscribe = example.subscribe(val =>
//   console.log('Example with Basic Observable:', val)
// );