import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: './hero-form.html'
})
export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Sam G', this.powers[3], 'Chuck Overstreet');
    submitted = false;

    onSubmit() {
        console.log('tits');
        this.submitted = true;
    }

    newHero() {
        this.model = new Hero(42, '', '');
    }

    get diagnostic() { return JSON.stringify(this.model); }
}
