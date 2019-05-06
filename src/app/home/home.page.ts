import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tipo = 'gasto';
  desc = ' ';
  entrada = ' ';
  categoria =  'Alimentação';
  date;
  constructor(public db: AngularFireDatabase ) {


  }

  add() {
    if (this.tipo === 'receita') {
      this.categoria = 'receita';
    }
    const item =  {
        valor: parseFloat(this.entrada),
        tipo: this.tipo,
        desc: this.desc,
        data: this.date,
        categoria: this.categoria
      };

    const ref = this.db.list('despesas');
    ref.push(item);


 //   this.somaValores = 0;
  //  this.soma();
    this.entrada = this.desc = '' ;
  }


}
