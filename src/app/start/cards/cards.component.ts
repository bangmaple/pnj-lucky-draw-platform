import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  initialNumber: number;
  constructor() {
    this.initialNumber = 9;
  }

  ngOnInit(): void {
  }

}
