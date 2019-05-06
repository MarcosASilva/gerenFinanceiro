import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  items: Observable<any>;
  itemsDespesa = [];
  somaValores = 0;
  constructor(public db: AngularFireDatabase ) {




}
soma(data) {
   data.forEach(
     (a) => {
       if (a.tipo === 'receita') {
         this.somaValores -= a.valor;
       } else {
        this.somaValores += a.valor;
       }
     }
    );
}
ngOnInit(){
  this.items = this.db.list('despesas', ref => ref.orderByChild('data')).valueChanges();
  this.items.subscribe(result => {
    this.somaValores = 0;
    this.soma(result);
  });
}
}
