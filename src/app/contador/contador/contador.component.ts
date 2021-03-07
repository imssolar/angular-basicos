
import { Component } from '@angular/core'


@Component({
    selector: 'app-contador',
    template: `
 <h1>{{titulo}}</h1>

 <button (click)="acumular(base)">+{{base}}</button>
 <button (click)="acumular(-base);">{{base}}</button>
<button (click)="numero=0">reset</button>
<h3>La base es:<strong>{{base}}</strong></h3>
<br>

<span>{{numero}}</span>

    
    `
})
export class contadorComponent {

    titulo: string = 'Contador App';

    numero: number = 0;


    base: number = 5;


    sumar() {
        this.numero += 1;
    }

    restar() {
        this.numero -= 1;
    }

    acumular(valor: number) {
        this.numero += valor;//0=0-(-1)-->0=0+1//0=0-(+1)--->0=0-1

    }

}