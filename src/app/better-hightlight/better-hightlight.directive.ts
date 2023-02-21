import { OnInit } from '@angular/core';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  constructor(private elRef:ElementRef,private rendrer:Renderer2) { }
ngOnInit() {
    this.rendrer.setStyle(this.elRef.nativeElement,'background-color','blue');
}


}
