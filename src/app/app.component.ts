import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StatesListComponent} from "./universities/components/states-list/states-list.component";
import {MatToolbar} from "@angular/material/toolbar";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {TranslateService} from "@ngx-translate/core";
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {MatCardHeader} from "@angular/material/card";
  import { MatCardSubtitle, MatCardTitle} from "@angular/material/card";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StatesListComponent, MatToolbar, FooterContentComponent, LanguageSwitcherComponent,MatCardSubtitle, MatCardHeader, MatCardTitle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Science-Focused Universities';
  constructor(translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('en');
  }
}
