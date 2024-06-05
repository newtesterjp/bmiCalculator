import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
  weight;
  height
  bmi
  weightHandler(event) {
    this.weight = parseFloat(event.target.value);
  }

  heightHandler(event) {
    this.height = parseFloat(event.target.value);
  }

  calculateBmi()
  {
        
        try {
            this.bmi=this.weight/(this.height*this.height);
        }
        catch(e) {
            this.bmi=undefined;
        }
  }
  get bmiValue()
  {
    if(this.bmi===undefined)
    {
        return "";
    }
    else
    {
        return `your bmi is ${this.bmi}`;
    }
  }

}