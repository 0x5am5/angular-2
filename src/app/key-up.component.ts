import { Component } from '@angular/core';

@Component({
    selector: 'key-up',
    templateUrl: './key-up.html'
})
export class KeyUpComponent {
    values = '';
    onKey(event: KeyboardEvent) {
        this.values = (<HTMLInputElement>event.target).value;
    }
}

@Component({
    selector: 'key-up-model',
    templateUrl: './key-up2.html'
})
export class KeyUp2Component {}

@Component({
    selector: 'on-enter',
    templateUrl: './on-enter.html'
})
export class OnEnterComponent {
    value = '';
    heroes = ['sam', 'pall'];
    onEnter(value: string) {
        this.update(value);

        if (value) {
            this.heroes.push(value);
        }
    }
    update(value: string) {
        this.value = value;
    }
}
