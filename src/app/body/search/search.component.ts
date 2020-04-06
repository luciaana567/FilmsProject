import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formulario: FormGroup;
  contraste;
  
  constructor(private router: Router,private fb: FormBuilder, private service :Service ) { }

  ngOnInit(): void {
    this.creat ();
    this.contraste=this.service.getContraste();
  }

  //função para atualizar contraste
  atualizarContraste():boolean{
    if(this.contraste!=this.service.getContraste()){
      this.contraste=this.service.getContraste();
      return false;
    }
    return true;
  }



  creat () {
    this.formulario = this.fb.group({
      texto: [''],
    });

  }

  onSubmit() {
    let aux = this.formulario.get('texto').value;
    this.formulario.reset('');
    this.pesquisar(aux);
  }

  private pesquisar(nomeFilme: string){
    this.router.navigateByUrl('/buscar/'+nomeFilme+'/'+1);
  }

}
