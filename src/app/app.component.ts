import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Bienvenue dans escape';
  nbClassicsRooms = 4;
  nbVirtualRooms = 5;

  lastLi() {
    console.log('lastLi');
    return 'Un amusement garanti';
  }

}
