import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {
name1: string = "qwe";
name2: string = "asd";

cl = {
primeiroNome: 'Joao',
segundoNome:  'lc',
endereco:     'Bloco 1'

};

  constructor() { }

  ngOnInit(): void {
  }

}
