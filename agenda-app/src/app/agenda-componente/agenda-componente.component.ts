import { Component, OnInit } from '@angular/core';
import {Contato} from '../../assets/contato'

@Component({
  selector: 'app-agenda-componente',
  templateUrl: './agenda-componente.component.html',
  styleUrls: ['./agenda-componente.component.css']
})
export class AgendaComponenteComponent implements OnInit {

  contatos:Contato[];

  constructor() {
    this.contatos = [];
  }

  ngOnInit(): void {
  }

  adicionarContato(nome:string, email:string, telefone:string, aniver:string){
    const contato:Contato = new Contato(nome, email, +telefone, aniver);
    this.contatos.push(contato);
  }
}
