import { Component } from 'react';
import "./Calculator.css"
import Button from '../Button/Button';

type CalculatorPropsType = {
    input: string
    result: string
}

type CalculatorStateType = {
    input: string
    result: string
}

const digits= ['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'X', 'RESET', '=']
const sig= ["-" , "+"  , "/" , "X"]

class Calculator extends Component<CalculatorPropsType, CalculatorStateType>{
    constructor(props: CalculatorPropsType){
        super(props);
        this.state = {
            input: "",
            result: "",
        };
    }

    handleClick = (value: string) =>{
        if (value == "=" ){
            const result = eval(this.state.input)
            this.setState({ result: result})
        }else if (value == "RESET"){ 
            this.setState({ result:"", input: ""})
        }else if (value == "DEL"){
            const result = eval(this.state.input.slice(0, -1))
            this.setState({ result: result})
        
        }else if(sig.includes(value) ){
            this.setState((oldState)=>{
                return {input:oldState.input +value, result: oldState.result} 
            })
        }else {

            this.setState((oldState)=>{
                const NewResult= sig.includes(oldState.result.slice(-1))? value : oldState.result +value
                return {input:oldState.input +value, result: NewResult} 
                    })
        }

    }


    render(){

        
     
        return (

            <div className='containerComponent'>
                <div className='containertTitle'>
                   <h1>Calc</h1>
                </div>
                <div className='containerScreen'>
                    <p>{this.state.result}</p>
                </div>
                <div className='containerKeyboard'>
                    {digits.map((value,index)=>(
                        <Button key={index} id={value} onClick={() => this.handleClick(value)}>
                            {value}
                        </Button>))
                    }
                </div>
                
        
            </div>

        )

    }
}

export default Calculator