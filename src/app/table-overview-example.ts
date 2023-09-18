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

  videos = [
    {
      Title: 'Title1',
      Body: 'Body1',
      ImagePath: 'https://dummyimage.com/600x400/000/fff',
      YoutubeUrl: 'https://www.youtube.com/watch?v=nS5qbSJLGx8',
    },
    {
      Title: 'Title2',
      Body: 'Body2',
      ImagePath: 'https://dummyimage.com/600x400/000/fff',
      YoutubeUrl: 'https://www.youtube.com/watch?v=nS5qbSJLGx8',
    },
    {
      Title: 'Title3',
      Body: 'Body3',
      ImagePath: 'https://dummyimage.com/600x400/000/fff',
      YoutubeUrl: 'https://www.youtube.com/watch?v=nS5qbSJLGx8',
    },
    {
      Title: 'Title4',
      Body: 'Body4',
      ImagePath: 'https://dummyimage.com/600x400/000/fff',
      YoutubeUrl: 'https://www.youtube.com/watch?v=nS5qbSJLGx8',
    },
  ];

  selectedTab(e: string) {
    console.log(e);
  }
}
