import {Directive, Input, ElementRef, Renderer2} from '@angular/core';
@Directive({
    selector: '[mouseBold]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class MouseBoldDirective{
  color
  defaultColor = 'black'
  
  @Input()
  set mouseBold(val) {
    this.color = val;
  }
    constructor(private element: ElementRef, private renderer: Renderer2){
      this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    }
    onMouseEnter(){
      this.setFontWeight("bold");
      this.setColor(this.color);
    }
    onMouseLeave(){
      this.setFontWeight("normal");
      this.setColor(this.defaultColor);
    }
    private setFontWeight(val: string) {
      this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
    }

    setColor(color: string){
      this.renderer.setStyle(this.element.nativeElement, "color", color );
    }
}