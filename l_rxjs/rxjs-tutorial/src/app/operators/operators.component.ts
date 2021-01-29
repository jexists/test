import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, of } from 'rxjs';
import { filter, first, map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // RxJS: OPERATORS

    //Creation Operator = of
    // const observable = of ([1,2,3]);

    // observable.subscribe((x) => {
    //   console.log(x);
    // })
    
    // const obs = from([1, 2, 3])
    // obs.subscribe((x) => {
    //   console.log(x);
    // });

    // const obs = interval(1000);
    // obs.subscribe((x) => {
    //   console.log(x);
    // });


    // const button = document.querySelector('button');

    // fromEvent(button, 'click').subscribe((e: MouseEvent) => {
    //   console.log(e);
    // });

    // 2. Pipeable Operators

    // const obs = of(1, 2, 3);
    // obs.pipe(
    //   map(((x) => 2 * x))
    // ).subscribe((val) => {
    //   console.log(val);
    // });

    // obs.pipe(first()
    //   ).subscribe((val) => {
    //     console.log(val);
    //   });

    // const obs = interval(1000);
    // obs.subscribe((x) => console.log(x));

    // const obs = interval(1000)
    //   .pipe(
    //     filter((val) => {
    //       return val % 2 == 0;
    //     })
    //   )
    //   .subscribe((x) => console.log(x));


    const button = document.querySelector('button');

    fromEvent(button, 'click')
      .subscribe((e: MouseEvent) => {
        console.log(e);
    });
    // fromEvent(button, 'click')
    //   .pipe(throttleTime(1000))
    //   .subscribe((e: MouseEvent) => {
    //     console.log(e);
    // });
  }

}
