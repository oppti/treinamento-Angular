import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  BotaoName = 'My Button';
  i = 0;
  selectDisabled = false;
  selectedOption = 0;

  constructor() { }
  inputName = 'Jhon';

  ngOnInit(): void {
  }
  save() {
   console.log('Click');
  }
  inc() {
  this.i++;
  this.BotaoName = 'clicado' + this.i  + ' Vezes';
  }
  cbChange(event) {
  console.log(event.checked);
  this.selectDisabled = event.checked;
  }
  selectionChange(event){
 console.log(event);
 this.selectedOption = event.value;

   }
  // inputEvent(event) {
  // console.log(event.target.value);
  // console.log(this.inputName);

  // }


}
