import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  nome1 = 'Teste1';
  idade = 35;

  p = {
    nome2: 'Teste2',
    idade: 20,
    endereco: 'Rua 50',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
