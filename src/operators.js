import { fromEvent, interval } from "rxjs";
import {
  map,
  filter,
  tap,
  take,
  takeLast,
  takeWhile,
  scan,
  reduce,
  switchMap
} from "rxjs/operators";

fromEvent(document, 'click')
.pipe(
    switchMap((e) => {
        return interval(1000)
        .pipe(
            tap(v => console.log('Tap:', v)),
            take(5),
            reduce((acc, v) => acc + v, 0)
        )
    })
)
.subscribe({
        next: (v) => console.log("Next:", v),
        complete: () => console.log("complete"),
      });

// .subscribe(() => {
    // const stream$ = interval(1000)
    // .pipe(
    //     take(5),
    //     reduce((acc, v) => acc + v, 0)
    // )

   

// })


// const stream$ = interval(1000).pipe(
//   tap((v) => console.log("Tap:", v)),
//   take(5),
  // map((v) => v * 3),
  // filter((v) => v % 2 === 0),
  // take(10),
  // takeLast(5),
  // takeWhile(v => v < 7),
  // scan((acc,v) => acc + v, 0),
//   reduce((acc, v) => acc + v, 0)
// );

// stream$.subscribe({
//   next: (v) => console.log("Next:", v),
//   complete: () => console.log("complete"),
// });
