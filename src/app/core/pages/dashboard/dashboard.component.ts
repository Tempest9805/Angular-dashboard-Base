import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MainLayoutComponent } from "../../layouts/main-layout/main-layout.component";

@Component({
  selector: 'app-dashboard',
  standalone: true, 
  imports: [TranslateModule, MainLayoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // Idioma predeterminado
  }
  switchLanguage(language: string) {
    this.translate.use(language); // Cambiar idioma dinámicamente
  }
}
