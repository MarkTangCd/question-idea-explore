import { Subject } from 'rxjs';

const sub$ = new Subject();

// observer object
const observer = {
  next: (x: number) => console.log('Observer got a next value: ' + x),
  error: (err: any) => console.log('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification')
}

sub$.subscribe(observer);

sub$.next(3);
sub$.next(4);