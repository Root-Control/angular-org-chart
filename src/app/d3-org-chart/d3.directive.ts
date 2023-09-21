import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[d3NodeClick]'
})
export class NodeClickDirective {
  @Output() nodeClick = new EventEmitter<any>();

  @HostListener('nodeClick', ['$event'])
  handleClick(event: Event) {
    this.nodeClick.emit(event);
  }
}
