import React, { Component, ReactNode } from "react"
import "./button.css"

interface ButtonProps {
    children: ReactNode; 
    id?: string; 
  }



class Button extends Component<ButtonProps & React.HTMLAttributes<HTMLButtonElement>>{
    render(){
        const { children, id, ...props } = this.props;
        return(
            <button id={id} className="buttonContainer" {...props}>
                {children}
            </button>
        )
    }
        
}


export default Button