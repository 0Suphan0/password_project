import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // properties
  passwordLength = 0;
  isUsingLetter: boolean = false;
  isUsingNumbers: boolean = false;
  isUsingSymbols: boolean = false;

  allAlphabet: string = "abcçdefghjklmnoprstuüvyz";
  allNumbers: string = "0123456789";
  allSymbols: string = "!'^#+%&/()=?_-";

  myGeneratedPassword:string = "";


  //Get Lenght Value 
  modifyLenght(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    } else {
      //burayı yazz..
      console.log("Dogru format gir");
    }

  }

  
  //are letters used?
  modifyLetters() {
    if (this.isUsingLetter == false)
      this.isUsingLetter = true;
    else
      this.isUsingLetter = false;
  }
  //are numbers used?
  modifyNumbers() {
    if (this.isUsingNumbers == false)
      this.isUsingNumbers = true;
    else
      this.isUsingNumbers = false;
  }
  //are symbols used?
  modifySymbols() {

    //Clean code
    this.isUsingSymbols = !this.isUsingSymbols;
    console.log(this.isUsingSymbols)


  }




  buttonClick() {


    //Create temp string
    let tempString = this.createTempString();
    this.myGeneratedPassword = "";

    // generate password randomly

    for (let i = 0; i < this.passwordLength; i++) {

      let randomIndex = Math.floor(Math.random() * tempString.length)
      this.myGeneratedPassword += tempString[randomIndex];

    }
   



  }


  private createTempString() {
    
    //this code controls that which charset will used...
    let myTempCharset = "";


    if (this.isUsingLetter) {
      myTempCharset += this.allAlphabet;
    }
    if (this.isUsingNumbers) {
      myTempCharset += this.allNumbers;
    }
    if (this.isUsingSymbols) {
      myTempCharset += this.allSymbols;
    }

    return myTempCharset;
  }
}
