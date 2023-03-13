import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'monkeys-view-monkeys',
  templateUrl: './view-monkeys.component.html',
  styleUrls: ['./view-monkeys.component.scss'],
})
export class ViewMonkeysComponent  {
  @Input() monkeysNumber = 0;
  @Output() eat = new EventEmitter<string>();

  eatBanana() {
    this.eat.emit('banana');
  }
}
