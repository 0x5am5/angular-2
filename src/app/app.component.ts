import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-app',
    template: '<hero-form></hero-form>',
})

export class AppComponent  {
    name = 'Sam';
    title = 'Title';
    heroes = [
            new Hero(1, 'Sam', 'Fish'),
            new Hero(13, 'John', 'Poo'),
            new Hero(15, 'Tom', 'Daddy')
    ];
}
