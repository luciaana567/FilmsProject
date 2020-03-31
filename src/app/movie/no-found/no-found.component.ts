import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-no-found',
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.css']
})
export class NoFoundComponent implements OnInit {

  public item :string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.item = this.activatedRoute.snapshot.params['noFound'];
  }

}
