import { Component, OnInit } from '@angular/core';

import { LIABILITIES } from "./mock-liabilities";

import { Liability } from "../liability";

@Component({
  selector: 'app-liabilities',
  templateUrl: './liabilities.component.html',
  styleUrls: ['./liabilities.component.css']
})
export class LiabilitiesComponent implements OnInit {

  liability: Liability = {
    id: 1,
    name: "Down Payment Gift",
    balance: 12000,
    payment: 250,
    rate: 0.00
  };

  liabilities = LIABILITIES;

  constructor() { }

  ngOnInit() {
  }

  onSelect(liability: Liability): void {
    this.selectedLiability = liability;
  }

}
