import {Component, OnInit} from '@angular/core';
import {University} from "../../model/university.entity";
import {NewsApiService} from "../../services/news-api.service";
import {StatesItemComponent} from "../states-item/states-item.component";
import {NgForOf} from "@angular/common";
import {LogoApiService} from "../../../shared/services/logo-api.service";

@Component({
  selector: 'app-states-list',
  standalone: true,
  imports: [
    StatesItemComponent,
    NgForOf
  ],
  templateUrl: './states-list.component.html',
  styleUrl: './states-list.component.css'
})
export class StatesListComponent implements OnInit{
  universities: University[] = [];
  constructor(
    private logoApiService: LogoApiService,
    private NewsApiService: NewsApiService) {}

  ngOnInit()   {
    this.getUniversities();
  }

  getUniversities() {
    this.NewsApiService.getSates().subscribe((response: any) => {
      this.universities = response.map((item: any) => {
        return {
          name: item.name,
          country: item.country,
          alpha_two_code: item.alpha_two_code,
          domains: item.domains,
          web_pages: item.web_pages,
          state_province: item['state-province']
        } as University;
      });
    });
  }


}
