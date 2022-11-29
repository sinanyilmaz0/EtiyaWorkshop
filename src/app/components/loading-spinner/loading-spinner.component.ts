import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <div class="spinner-border text-primary" role="status" id="loading">
      <span class="sr-only"></span>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerComponent {

}
