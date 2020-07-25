import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from './service/app.settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Grocery List';
  groceries;
  constructor(private appSettingsService: AppSettingsService) {
  }

  ngOnInit() {
    this.appSettingsService.getJSON().subscribe(data => {
      this.groceries = data;
    });
  }
}
