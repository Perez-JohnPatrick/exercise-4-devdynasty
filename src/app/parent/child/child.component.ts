import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message = '';
 @Output() greet = new EventEmitter;

 onButtonClick() {
  this.greet.emit("Hello! I'm your child");
}

}
