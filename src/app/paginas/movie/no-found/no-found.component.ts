import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-no-found',
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.css']
})
export class NoFoundComponent implements OnInit {

  public item :string;
  contraste;

  constructor(private activatedRoute: ActivatedRoute, private service:Service) { }

  ngOnInit(): void {
    this.item = this.activatedRoute.snapshot.params['noFound'];
    this.contraste=this.service.getContraste();
  }


 //função para atualizar contraste
 atualizarContraste():boolean{
   if(this.contraste!=this.service.getContraste()){
     this.contraste=this.service.getContraste()
     return false;
   }
   return true;
 }
}
