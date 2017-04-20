import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer
} from '@angular/core';

// import {setProperty} from 'angular2/ts/src/core/forms/directives/shared';
function setProperty(renderer: Renderer, elementRef: ElementRef, propName: string,
                     propValue: any): void {
  renderer.setElementProperty(elementRef, propName, propValue);
}

@Directive({selector: '[ngTableFiltering]'})
export class NgTableFilteringDirective {
  @Input() public ngTableFiltering: any = {
    filterString: '',
    columnName: 'name'
  };

  @Output() public tableChanged: EventEmitter<any> = new EventEmitter();

  private element: ElementRef;
  private renderer: Renderer;

  public constructor(element: ElementRef, renderer: Renderer) {
    this.element = element;
    this.renderer = renderer;
    // Set default value for filter
    setProperty(this.renderer, this.element, 'value', this.ngTableFiltering.filterString);
  }

  @Input()
  public get config(): any {
    return this.ngTableFiltering;
  }

  public set config(value: any) {
    this.ngTableFiltering = value;
  }

  @HostListener('input', ['$event.target.value'])
  public onChangeFilter(event: any): void {
    this.ngTableFiltering.filterString = event;
    this.tableChanged.emit({filtering: this.ngTableFiltering});
  }

}
