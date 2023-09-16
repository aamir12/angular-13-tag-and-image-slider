import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
  Input,
  ViewChildren,
  QueryList,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements AfterViewInit {
  @ViewChild('tabsList') tabsList!: ElementRef;
  @ViewChildren('tagElement') tagElements!: QueryList<ElementRef>;
  @Input('tags') tags: string[] = [];
  @Output('onSelect') onSelect = new EventEmitter<string>();

  dragging = false;
  showLeftArrow = false;
  isDragging = false;
  showRightArrow = false;
  activeTabIndex: number = 0;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.manageIcons();
    }, 0);
  }

  selectTab(index: number, tag: string): void {
    this.activeTabIndex = index;
    this.onSelect.emit(tag);
    const selectedTag = this.tagElements.filter((_, i) => i === index)[0]
      .nativeElement;

    if (this.tabsList && selectedTag) {
      const container = this.tabsList.nativeElement;

      const containerWidth = container.offsetWidth;
      const selectedTagWidth = selectedTag.offsetWidth;

      const selectedTagOffsetLeft = selectedTag.offsetLeft;
      const containerScrollLeft = container.scrollLeft;
      const centerOffset = (containerWidth - selectedTagWidth) / 2;

      if (selectedTagOffsetLeft - 50 < containerScrollLeft) {
        this.tabsList.nativeElement.scrollLeft =
          selectedTagOffsetLeft - centerOffset;
      } else if (
        selectedTagOffsetLeft + selectedTagWidth + 50 >
        containerScrollLeft + containerWidth
      ) {
        this.tabsList.nativeElement.scrollLeft =
          selectedTagOffsetLeft +
          selectedTagWidth -
          containerWidth +
          centerOffset;
      }
    }
  }

  scrollRight(): void {
    this.tabsList.nativeElement.scrollLeft += 200;
    this.manageIcons();
  }

  scrollLeft(): void {
    this.tabsList.nativeElement.scrollLeft -= 200;
    this.manageIcons();
  }

  manageIcons(): void {
    if (!this.tabsList || this.tags.length === 0) {
      return;
    }

    const scrollLeft = this.tabsList.nativeElement.scrollLeft;
    const maxScrollValue =
      this.tabsList.nativeElement.scrollWidth -
      this.tabsList.nativeElement.clientWidth -
      20;

    if (scrollLeft >= 20) {
      this.showLeftArrow = true;
    } else {
      this.showLeftArrow = false;
    }

    if (scrollLeft >= maxScrollValue) {
      this.showRightArrow = false;
    } else {
      this.showRightArrow = true;
    }
  }

  onMousemove(event: MouseEvent) {
    if (!this.dragging) return;
    this.isDragging = true;
    this.tabsList.nativeElement.scrollLeft -= event.movementX;
  }

  onMousedown(event: MouseEvent) {
    this.dragging = true;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (this.el.nativeElement.contains(event.target)) {
      this.dragging = false;
      this.isDragging = false;
    }
  }
}