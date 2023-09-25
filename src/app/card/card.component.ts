import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('title') title: string = '';
  @Input('description') description: string = '';
  @Input('clickHandler') clickHandler: () => void = () => {};
  @Input('type') type!: 'video' | 'document';
  @Input('docPath') docPath: string = '';
  @Input('imagePath') imagePath: string = '';
  @Input('isSlider') isSlider: boolean = false;
  constructor() {}

  onClick() {
    this.clickHandler();
  }
}
