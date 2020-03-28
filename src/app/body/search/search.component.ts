import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formulario: FormGroup;
  
  constructor(private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.creat ();
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
    this.router.navigateByUrl('/buscar/'+nomeFilme);
  }

}
