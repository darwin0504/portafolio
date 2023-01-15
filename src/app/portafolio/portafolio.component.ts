import { Component } from '@angular/core';
import * as copy from 'copy-to-clipboard';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent {


  copyEmail(text: string) {
    console.log(text);
    copy(text, {
    });
  };

}
