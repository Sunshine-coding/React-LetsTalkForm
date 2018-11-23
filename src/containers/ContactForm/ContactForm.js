import React, {Component} from 'react'
import Input from '../../components/UI/Input/Input'


class ContactForm extends Component{
 state = {
   personalInfo : {
    fullname : { 
      elementType : 'input',
      elementConfig: {
        type: 'text',
        placeholder : 'HyeSoo Park'
      },
      value: ''
    },
    email : { 
      elementType : 'input',
      elementConfig: {
        type: 'email',
        placeholder : 'HyeSoo@gmail.com'
      },
      value: ''
    },
    reEmail : { 
      elementType : 'input',
      elementConfig: {
        type: 'email',
        placeholder : 'HyeSoo@gmail.com'
      },
      value: ''
    },
    phone : { 
      elementType : 'input',
      elementConfig: {
        type: 'phone',
        placeholder : '000-0000-0000'
      },
      value: ''
    },
    detailAddress : { 
      elementType : 'input',
      elementConfig: {
        type: 'text',
        placeholder : 'ex)building A, 30'
      },
      value: ''
    },
    Address : { 
      elementType : 'input',
      elementConfig: {
        type: 'text',
        placeholder : 'ex)Pyynikki, Tampere, Finland'
      },
      value: ''
    },
    city : { 
      elementType : 'input',
      elementConfig: {
        type: 'text',
        placeholder : 'ex)Helsinki'
      },
      value: ''
    },
    state : { 
      elementType : 'input',
      elementConfig: {
        type: 'text',
        placeholder : 'ex)Helsinki'
      },
      value: ''
    },
    region : { 
      elementType : 'input',
      elementConfig: {
        type: 'text',
        placeholder : 'ex)Uusima'
      },
      value: ''
    },
    zipCode : { 
      elementType : 'input',
      elementConfig: {
        type: 'text',
        placeholder : 'ex)12345'
      },
      value: ''
    },
    howHear : { 
      elementType : 'input',
      elementConfig: {
        type: 'text',
        placeholder : 'ex)How did you hear about us'
      },
      value: ''
    }
  },
  skillLocation :{
    primaryDesign : {
      elementType : 'radio',
      elementConfig : {
        options : [
          {value: 'designResearch', displayValue: 'Design Reearch'},
          {value: 'visualDesign', displayValue: 'Visual Design'},
          {value: 'uxDesign', displayValue: 'UX design'},
          {value: 'frontEnd', displayValue: 'Front-end Dev'}]
        }
      },
    experience : {
      elementType : 'checkbox',
      elementConfig : {
        options : [
          {value : 'visualDesign', displayValue: 'Visual Design'},
          {value: 'uxDesign', displayValue: 'UX Design'},
          {value: 'frontEndDev', displayValue: 'Front-end Development'},
        ]     
      }
    }
    }
  }

  render(){
    const personalInfoArr = [];
    let newPersonalInfoArr;
    for(let key in this.state.personalInfo){
      console.log(key);
      console.log({id: key, config: this.state.personalInfo[key]});
      newPersonalInfoArr = personalInfoArr.concat([{id: key, config: this.state.personalInfo[key]}]);
    }
    
    return (
      <form>
        <Input label="..." elementType="..." elementConfig="..." value="..."></Input>
        {newPersonalInfoArr.map(formElement => (
          <Input 
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}/>
        ))}
      </form>
    )
  }
} 

export default ContactForm
