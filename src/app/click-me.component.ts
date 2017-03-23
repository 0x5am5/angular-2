import { Component } from '@angular/core';

@Component({
    selector: 'click-me',
    templateUrl: './click-me.html'
})

export class ClickMeComponent {
    clickMessage = '';

    onClickMe() {
        this.clickMessage = 'Fuck!';
    }
}
