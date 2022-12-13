import { Component, OnInit } from '@angular/core';

import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private loadingService: LoadingService) {}

  isLoading: boolean = false;
  isLoadingText!: string;
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
