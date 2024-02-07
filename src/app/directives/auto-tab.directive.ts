import { isPlatformBrowser } from '@angular/common';
import { Directive, HostListener, Input } from '@angular/core';
import { Continents} from '../../utils/continents';
@Directive({
  selector: '[appAutoTab]'
})
export class AutoTabDirective {
  @Input() appAutoTab: string;
  constructor() {}
  @HostListener('input', ['$event.target']) 
  onInput(input: { value: string | any[]; attributes: { maxlength: { value: any; }; }; }) {
    const length = input.value.length;
    const maxLength = input.attributes.maxlength.value;
    var inp='';
    if (length >= maxLength && this.appAutoTab) {
      if(this.appAutoTab.includes(Continents.America))
      inp=Continents.America;
      if(this.appAutoTab.includes(Continents.APAC))
      inp=Continents.APAC;
      if(this.appAutoTab.includes(Continents.EMEA))
      inp=Continents.EMEA;
      var x=this.appAutoTab.split(inp);
      var y=parseInt(x[1])+1;
      var ip=inp+(y).toString();
      const field = document.getElementById(ip);
      if (field) {
        field.removeAttribute('disabled');
        field.focus();
      }
    }
  }
}