import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cambiaColor', [ //cada vez que lance el trigger estaré creando una animación diferente. Luego el nombre que le hemos puesto en el html
      state('rojo', style({ //estados que puede tener
        'background-color': 'red' //estilos del estado
      })),
      state('amarillo', style({
        'background-color': 'yellow'
      })),
      state('verde', style({
        'background-color': 'green'
      })),
    ]),
    trigger('cambiaColor2', [
      state('rojo', style({
        'background-color': 'red'
      })),
      state('amarillo', style({
        'background-color': 'yellow'
      })),
      state('verde', style({
        'background-color': 'green'
      })),
      transition('* => *', animate(500)) //de todos a todos va a tardar 0.5s de transición
    ]),
    trigger('cambiaColor3', [
      state('rojo', style({
        'background-color': 'red'
      })),
      state('amarillo', style({
        'background-color': 'yellow',
        'transform': 'scale(2)' //cambio el tamaño
      })),
      state('verde', style({
        'background-color': 'green'
      })),
      transition('verde => amarillo', animate(500)), //acá especifico de que color a que color
      transition('amarillo => rojo', animate(1000)),
      transition('rojo => verde', animate(2000)),
      transition('void => *', [ //en la primera transición hace un efecto
        style({ 'transform': 'translateX(-100%)' }),
        animate(2000)
      ])
    ]),
    trigger('cambiaColor4', [
      state('rojo', style({
        'background-color': 'red'
      })),
      state('amarillo', style({
        'background-color': 'yellow'
      })),
      state('verde', style({
        'background-color': 'green'
      })),
      transition('void => *', [
        animate(2000, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }), //offset es para indicar en que % de la animacion se aplican los styles
          style({ opacity: 0.5, transform: 'translateX(100px)', offset: 0.5 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
        ]))
      ])
    ]),
  ]
})
export class AppComponent {

  color: string;

  constructor() {
    this.color = 'verde';
  }

  ngOnInit() {
    setInterval(() => {
      if (this.color === 'verde') {
        this.color = 'amarillo';
      }
      else if (this.color === 'amarillo') {
        this.color = 'rojo';
      }
      else if (this.color === 'rojo') {
        this.color = 'verde';
      }
    }, 3000);
  }

}
