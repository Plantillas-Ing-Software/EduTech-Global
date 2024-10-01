import {Component, Input, OnInit} from '@angular/core';
import {University} from "../../model/university.entity";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatAnchor} from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import {TranslateModule} from "@ngx-translate/core";
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {NgIf} from "@angular/common";
@Component({
  selector: 'app-states-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatAnchor,
    MatCardModule,
    TranslateModule,
    NgIf
  ],
  templateUrl: './states-item.component.html',
  styleUrl: './states-item.component.css'
})
export class StatesItemComponent implements OnInit {
  @Input() university!: University;

  logoUrl: string = '';

  constructor(private logoApiService: LogoApiService) {}

  ngOnInit(): void {
    if (this.university.domains.length > 0) {
      this.logoUrl = this.logoApiService.getUrlToLogo(this.university.domains[0]);
    }
  }
}
