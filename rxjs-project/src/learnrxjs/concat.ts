import { concat, empty } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';

const userMessage = document.getElementById('message');

const delayedMessage = (message: any, delayedTime = 1000) => {
  return empty().pipe(startWith(message), delay(delayedTime));
}

concat(
  delayedMessage('Get Ready!'),
  delayedMessage(3),
  delayedMessage(2),
  delayedMessage(1),
  delayedMessage('Go!'),
  delayedMessage('', 2000)
).subscribe((message: any) => (userMessage.innerHTML = message));