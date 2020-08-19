import React from 'react';
import './styles.css';

class NumberButton extends React.Component {

    constructor(props,context) {
        super(props,context)
    }
    
    renderNumber = (number,color) =>{
        let initStyle = {
            width:80,
            height:52,
            backgroundColor: color ? color : "#eeeeee",
            border: 0,
            outline: "none",
            marginTop:3,
            marginLeft:2,
            fontSize:color ? null : 18,
            fontWeight:color ? null : 700
        }
        
        if(number<1 || typeof number == "string"){
            return <button type="button" style={initStyle} className="buttonA" onClick={()=>{this.props.buttonClick(number,color)}}>{number}</button>
        }
        let list = [];
        for(let i = 1;i<number+1;i++){
            list.push(i);
        }
        return list.map(i=> <button type='button'  className="buttonA" style={initStyle} key = {i} onClick={()=>{this.props.buttonClick(i,color)}}>{i}</button>)
    }

    render() {
        const { number ,color } = this.props;
        return (
            <div>
                {
                    this.renderNumber(number,color)
                }
            </div>
        )
    }
}

export default NumberButton;