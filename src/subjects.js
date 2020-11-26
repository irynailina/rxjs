import {Subject, BehaviorSubject, ReplaySubject} from 'rxjs'

document.addEventListener('click', () => {
    const stream$ = new Subject()
    stream$.subscribe(v => console.log(v))
    stream$.next('Hello')
    stream$.next('Rx')
    stream$.next('Js')
})

document.addEventListener('click', () => {
    const stream$ = new BehaviorSubject('First!')
    stream$.subscribe(v => console.log(v))
    stream$.next('Hello')
    stream$.next('Rx')
    stream$.next('Js')
})

document.addEventListener('click', () => {
    const stream$ = new ReplaySubject(2)
    stream$.next('Hello')
    stream$.next('Rx')
    stream$.next('Js')
    stream$.subscribe(v => console.log(v))
})
