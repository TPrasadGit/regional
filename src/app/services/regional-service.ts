import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Continents } from '../../utils/continents';
import {isValidAmericanCity} from '../../utils/isValidAmericanCity';
import {isValidAsianCity} from '../../utils/isValidAsianCity';
import {isValidEMEACity} from '../../utils/isValidEMEACity';
import {isValidLetter} from '../../utils/is-valid-letter';

export interface PuzzleCity{
  continent:string;
  city:string;
  hint:string[]
}
export interface TodaysPuzzle extends Array<PuzzleCity>{}
@Injectable({
  providedIn: 'root',
})
export class RegionalService {
cityName: string='';
localAPIURL:string='https://localhost:7145/api/Puzzles/';
constructor(private http: HttpClient) { }

GetPuzzleOfTheDay():Observable<TodaysPuzzle>{
  return this.http.get<TodaysPuzzle>(this.localAPIURL+'GetPuzzle').pipe(
    catchError(error => {
      console.error('Error occurred:', error);
      return throwError(error);
  })
)}

keyPressHandleRegional(event:KeyboardEvent,todaysPuzzle:TodaysPuzzle):void{
let id = (event.target as HTMLInputElement).id; // || event.srcElement || event.currentTarget;
var resetForm = <HTMLFormElement>document.getElementById("myForm");

  if(isValidLetter(event.key)){
    this.tabChangeInput(event);
  }
  if(event.key=='Enter')
  {
  let index=0;
  debugger;
  if(id.includes(Continents.America))
  {
    this.cityName=this.getEnteredValue(Continents.America, todaysPuzzle[index].city.length)
    if(this.cityName.length==todaysPuzzle[0].city.length){
      if(this.cityName.toUpperCase()==todaysPuzzle[0].city.toUpperCase())
      {
        todaysPuzzle[0].hint=todaysPuzzle[0].city.toUpperCase().split('');
        let common1:string[]=this.getCommonChars(todaysPuzzle[1].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[1].hint=this.correctLettersOfCity(todaysPuzzle[1].hint,todaysPuzzle[1].city.toUpperCase(),common1);
        let common2:string[]=this.getCommonChars(todaysPuzzle[2].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[2].hint=this.correctLettersOfCity(todaysPuzzle[2].hint,todaysPuzzle[2].city.toUpperCase(),common2);
        resetForm.reset();
       }
      else if (this.isValidCity(id,this.cityName)){
        let common:string[]=this.getCommonChars(todaysPuzzle[0].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[0].hint=this.correctLettersOfCity(todaysPuzzle[0].hint,todaysPuzzle[0].city.toUpperCase(),common);
        let common1:string[]=this.getCommonChars(todaysPuzzle[1].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[1].hint=this.correctLettersOfCity(todaysPuzzle[1].hint,todaysPuzzle[1].city.toUpperCase(),common1);
        let common2:string[]=this.getCommonChars(todaysPuzzle[2].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[2].hint=this.correctLettersOfCity(todaysPuzzle[2].hint,todaysPuzzle[2].city.toUpperCase(),common2);
        resetForm.reset();
       }
    } 
   
  }
  else if(id.includes(Continents.APAC))
  {debugger;
    index=1;
    this.cityName=this.getEnteredValue(Continents.APAC, todaysPuzzle[index].city.length)
    if(this.cityName.length==todaysPuzzle[1].city.length){
      if(this.cityName.toUpperCase()==todaysPuzzle[1].city.toUpperCase())
      {
        todaysPuzzle[1].hint=todaysPuzzle[1].city.toUpperCase().split('');
        let common0:string[]=this.getCommonChars(todaysPuzzle[0].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[0].hint=this.correctLettersOfCity(todaysPuzzle[0].hint,todaysPuzzle[0].city.toUpperCase(),common0);
        let common2:string[]=this.getCommonChars(todaysPuzzle[2].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[2].hint=this.correctLettersOfCity(todaysPuzzle[2].hint,todaysPuzzle[2].city.toUpperCase(),common2);
        resetForm.reset();
      }
      else if (this.isValidCity(id,this.cityName.toUpperCase())){
        let common:string[]=this.getCommonChars(todaysPuzzle[1].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[1].hint=this.correctLettersOfCity(todaysPuzzle[1].hint,todaysPuzzle[1].city.toUpperCase(),common);
        let common0:string[]=this.getCommonChars(todaysPuzzle[0].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[0].hint=this.correctLettersOfCity(todaysPuzzle[0].hint,todaysPuzzle[0].city.toUpperCase(),common0);
        let common2:string[]=this.getCommonChars(todaysPuzzle[2].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[2].hint=this.correctLettersOfCity(todaysPuzzle[2].hint,todaysPuzzle[2].city.toUpperCase(),common2);
        resetForm.reset();
        }
    }
   
  }
  else if(id.includes(Continents.EMEA))
  {
    index=2;
    this.cityName=this.getEnteredValue(Continents.EMEA, todaysPuzzle[index].city.length)
    if(this.cityName.length==todaysPuzzle[2].city.length){
      if(this.cityName.toUpperCase()==todaysPuzzle[2].city.toUpperCase())
      {
        todaysPuzzle[2].hint=todaysPuzzle[2].city.toUpperCase().split('');
        let common0:string[]=this.getCommonChars(todaysPuzzle[0].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[0].hint=this.correctLettersOfCity(todaysPuzzle[0].hint,todaysPuzzle[0].city.toUpperCase(),common0);
        let common1:string[]=this.getCommonChars(todaysPuzzle[1].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[1].hint=this.correctLettersOfCity(todaysPuzzle[1].hint,todaysPuzzle[1].city.toUpperCase(),common1);
        resetForm.reset(); 
       }
      else if (this.isValidCity(id,this.cityName)){
        let common:string[]=this.getCommonChars(todaysPuzzle[2].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[2].hint=this.correctLettersOfCity(todaysPuzzle[2].hint,todaysPuzzle[2].city.toUpperCase(),common);
        let common0:string[]=this.getCommonChars(todaysPuzzle[0].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[0].hint=this.correctLettersOfCity(todaysPuzzle[0].hint,todaysPuzzle[0].city.toUpperCase(),common0);
        let common1:string[]=this.getCommonChars(todaysPuzzle[1].city.toUpperCase(),this.cityName.toUpperCase());
        todaysPuzzle[1].hint=this.correctLettersOfCity(todaysPuzzle[1].hint,todaysPuzzle[1].city.toUpperCase(),common1);
        resetForm.reset();
       }
    } 
    
  }   

}
if(event.key=='Backspace')
{
  this.backspace(id);
}

}

getEnteredValue(input:string, length:number):string
{
let output:string='';
for(let i=0;i<length;i++)
{
  const inp = document.getElementById(input+i) as HTMLInputElement | null;
  const val = inp?.value;
  output=output+val;
}
return output;
}

backspace(id:string)
{debugger;
  // if(!id.includes('0'))
  // {
  //   document.getElementById(id)?.setAttribute('disabled','disabled');
  // }
  var inp='';
  if(id.includes(Continents.America))
  inp=Continents.America;
  if(id.includes(Continents.APAC))
  inp=Continents.APAC;
  if(id.includes(Continents.EMEA))
  inp=Continents.EMEA;
  var x=id.split(inp);
  var y=parseInt(x[1])-1;
  var ip=inp+(y).toString();
  const field = document.getElementById(ip);
  if (field) {
    field.focus();
  }
}
getCommonChars(str1:string,str2:string):string[]{
    let set1 = new Set(str1);
    let set2 = new Set(str2);
    let common= new Set([...set1].filter(x => set2.has(x)));
    return Array.from(common);
}

correctLettersOfCity(charArray:string[],correctWord:string,common:string[]):string[]
 {
  common.forEach(function(value1,i){
  correctWord.split('').forEach(function(value2,j){
  if(value1==value2){
    charArray[j]=value2;
  }
})
})
return charArray;

}
isValidCity(inputID:string,city:string):Boolean{
  let result:Boolean=false;
  if(inputID.includes(Continents.America))
  result=isValidAmericanCity(city)
  if(inputID.includes(Continents.APAC))
  result=isValidAsianCity(city)
  if(inputID.includes(Continents.EMEA))
  result=isValidEMEACity(city)
  return result;
}
tabChangeInput(event:Event){
  debugger;
  let id = (event.target as HTMLInputElement).id; // || event.srcElement || event.currentTarget;
  var inp='';
  if(id.includes(Continents.America))
    inp=Continents.America;
    if(id.includes(Continents.APAC))
    inp=Continents.APAC;
    if(id.includes(Continents.EMEA))
    inp=Continents.EMEA;
    var x=id.split(inp);
    var y=parseInt(x[1])+1;
    var ip=inp+(y).toString();
    const field = document.getElementById(ip);
    if (field) {
     // field.removeAttribute('disabled');
      field.focus();
    }  
}
setInputState(cityAmerica:number, cityAPAC:number, cityEMEA:number)
{
   const inpAmerica = document.getElementById(Continents.America+'0') as HTMLInputElement | null;
    inpAmerica?.removeAttribute('disabled');
  for(let i=1;i<cityAmerica;i++)
  {
    const inp = document.getElementById(Continents.America+i) as HTMLInputElement | null;
    const val = inp?.setAttribute('disabled','disabled');
  }
  const inpAPAC = document.getElementById(Continents.APAC+'0') as HTMLInputElement | null;
  inpAPAC?.removeAttribute('disabled');
  for(let i=1;i<cityAPAC;i++)
  {
    const inp = document.getElementById(Continents.APAC+i) as HTMLInputElement | null;
    const val = inp?.setAttribute('disabled','disabled');
  }
  const inpEMEA = document.getElementById(Continents.EMEA+'0') as HTMLInputElement | null;
  inpEMEA?.removeAttribute('disabled');
  for(let i=1;i<cityEMEA;i++)
  {
    const inp = document.getElementById(Continents.EMEA+i) as HTMLInputElement | null;
    const val = inp?.setAttribute('disabled','disabled');
  }
}
}