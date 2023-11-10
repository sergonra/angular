import { AppModule } from './../app.module';
import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <h1>{{title}}</h1>
    <h3> Counter:{{counter}} </h3>
    <button (click)="increaseBy(1)">+</button>
    <button (click)="increaseBy(-1)">-</button>
    <button (click)="resetCounter(10)">Reset</button>`,
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {

  public title: string = 'componente Counter';
  public counter: number = 10;

  increaseBy (value:number):void {
    this.counter += value;
  }
  resetCounter(value:number){
    this.counter = value;
  }
}
