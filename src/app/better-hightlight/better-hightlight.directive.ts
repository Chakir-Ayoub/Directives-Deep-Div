import { Directive, ElementRef, Renderer2,HostListener, OnInit, HostBinding  } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') background: string='red';

  constructor(private elRef:ElementRef,private rendrer:Renderer2) { }
  ngOnInit() {
  //  this.rendrer.setStyle(this.elRef.nativeElement,'background-color','blue');
      }
    @HostListener('mouseentr') mouseover(event:Event){
     // this.rendrer.setStyle(this.elRef.nativeElement,'background-color','blue');
        this.background='black';
    }

    @HostListener('mouseleave') mouseleave(event:Event){
      // this.rendrer.setStyle(this.elRef.nativeElement,'background-color','red');
        this.background='red';
    }

}
