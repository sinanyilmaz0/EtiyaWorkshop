import { Component, OnInit } from '@angular/core';

import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private loadingService: LoadingService) {}

  isLoading: boolean = false;
  isLoadingText!: string;
  // Loading.service'den çekip,değerini değiştirmek istiyorum.
  ngOnInit(): void {
    this.subscribeToLoading();
    this.subscribeToLoadingText();
  }

  subscribeToLoading() {
    this.loadingService.isLoadingSubject.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

  subscribeToLoadingText(){
    this.loadingService.text.subscribe((isLoadingText)=>{
      this.isLoadingText = isLoadingText;
    })
  }
}
