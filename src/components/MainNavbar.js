import React, { Component } from 'react';

class MainNavbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      result : ''
     }
  }

 

  keyPressAction(val){
  

    if(val == 'clear'){
      this.setState({
        result : ''
      })
    }else if(val == '='){
     
      var arr = this.state.result.split('') ;
      var operator = '';
      var operand1 = '';
      var operand2 = '';
      console.log(arr);
     for(var i =0 ;i< arr.length ;i++){
       if(isNaN(parseInt(arr[i]))){
         operator = arr[i];
          operand1 = this.state.result.slice(0, i);
          operand2 = this.state.result.slice(i+1, this.state.result.length);
       }  
     }
     console.log(operand1);
     console.log(operand2);
     if(operand1 != '' && operand2 != ''){
        if(operator == '+'){
          this.setState({
            result :  parseInt(operand1) + parseInt(operand2)
          })
        }else if(operator == '-'){
          this.setState({
            result :  parseInt(operand1) - parseInt(operand2)
          })
        }else if(operator == '*'){
          this.setState({
            result :  (parseInt(operand1) * parseInt(operand2))
          })
        }else if(operator == '/'){
          this.setState({
            result :  (parseInt(operand1) / parseInt(operand2)).toFixed(2)
          })
        }
      }
    }else{
      if(this.state.result.length == 0 && (val == '+' ||  val == '-' || val == '*' || val == '/' )){
        return;
      }
      if((val == '+' ||  val == '-' || val == '*' || val == '/' ) && this.state.result.length > 0){
        var last_val = this.state.result[this.state.result.length-1];
        if(last_val != '+' && last_val != '-' && last_val != '*' && last_val != '/'){
          this.setState({
            result :  this.state.result + val
          })
        }
      }else{
        this.setState({
          result :  this.state.result + val
        })
      }
    }
  }




  render(){
    return (
      <div id="mainnavbar" style={{maxWidth:550,margin:'0 auto'}}>
        <div className="calculator-contanier" >        
          <div className="result-section">{this.state.result}</div>

          <div>
            <button onClick={() => this.keyPressAction('7')} className="btn-style">7</button>
            <button  onClick={() => this.keyPressAction('8')}  className="btn-style" >8</button>
            <button  onClick={() => this.keyPressAction('9')}  className="btn-style" >9</button>
            <button  onClick={() => this.keyPressAction('/')}  className="btn-style" >/</button>
          </div>

          <div>
            <button  onClick={() => this.keyPressAction('4')}  className="btn-style" >4</button>
            <button  onClick={() => this.keyPressAction('5')}  className="btn-style" >5</button>
            <button  onClick={() => this.keyPressAction('6')}  className="btn-style" >6</button>
            <button  onClick={() => this.keyPressAction('*')}  className="btn-style" >*</button>
          </div>


          <div>
            <button  onClick={() => this.keyPressAction('1')}  className="btn-style" >1</button>
            <button  onClick={() => this.keyPressAction('2')}  className="btn-style" >2</button>
            <button  onClick={() => this.keyPressAction('3')}  className="btn-style" >3</button>
            <button  onClick={() => this.keyPressAction('-')}  className="btn-style" >-</button>
          </div>

            <button  onClick={() => this.keyPressAction('0')}  className="btn-style" >0</button>
            <button  onClick={() => this.keyPressAction('=')}  className="btn-style" >=</button>
            <button  onClick={() => this.keyPressAction('clear')}  className="btn-style" >CL</button>
            <button  onClick={() => this.keyPressAction('+')}  className="btn-style" >+</button>
        </div>
      </div>
    );
  }
}




export default (MainNavbar);