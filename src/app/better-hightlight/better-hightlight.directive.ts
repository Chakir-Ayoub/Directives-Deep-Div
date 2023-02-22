import { Directive, ElementRef, Renderer2,HostListener, OnInit  } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  constructor(private elRef:ElementRef,private rendrer:Renderer2) { }
  ngOnInit() {
  //  this.rendrer.setStyle(this.elRef.nativeElement,'background-color','blue');
      }
    @HostListener('mouseentr') mouseover(event:Event){
      this.rendrer.setStyle(this.elRef.nativeElement,'background-color','blue');
    }

    @HostListener('mouseleave') mouseleave(event:Event){
      this.rendrer.setStyle(this.elRef.nativeElement,'background-color','red');
    }

}
