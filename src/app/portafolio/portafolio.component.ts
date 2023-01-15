import { Component } from '@angular/core';
import * as copy from 'copy-to-clipboard';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent {

  public active = false;

  copyEmail(text: string) {
    console.log(text);
    copy(text, {
    });

    this.active = true;
    setTimeout(() => {
      this.active = false;
    }, 2000);
  };
}
