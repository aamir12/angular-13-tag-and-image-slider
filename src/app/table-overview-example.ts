import { Component } from '@angular/core';

@Component({
  selector: 'table-overview-example',
  styleUrls: ['table-overview-example.css'],
  templateUrl: 'table-overview-example.html',
})
export class TableOverviewExample {
  tags: string[] = [
    'All',
    'Music',
    'Chess',
    'Live',
    'Gaming',
    'Editing',
    'Mixing consoles',
    'Comedy',
    'Computer Hardware',
    'News',
    'Computer Programming',
    'Video Editing Software',
    'Sports',
  ];

  selectedTab(tag: string) {
    console.log(tag);
  }
}
