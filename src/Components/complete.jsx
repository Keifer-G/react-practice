import React from 'react';

import propType from 'prop-types';

import NumberButton from './completeCom/numberButton';

class Complete extends React.Component{

    constructor(props){
        super(props)

        this.state={
            result:"",
            content:"",
            continuea:""
        }
    }
    
    buttonClick = (number,color) =>{
        let { result, continuea, content} = this.state;
        if(!color && !Object.is(parseInt(number), NaN)){
                this.setState({
                    continuea :  continuea + number,
                    result : continuea + number,
                    content : content + number
                })
        }else{
            if(number == "=" || number == "+" || number == "-" || number == "/" || number == "*"){
                if(number=="="){
                    try{
                        let res = eval(content);
                        this.setState({
                            result : res,
                            continuea : '',
                            content : content + number
                        })
                    }catch{
                        return;
                    }
                }else{
                    try{
                        let res = eval(content);
                        this.setState({
                            result : res,
                            continuea : '',
                            content : res + number
                         })
                    }catch{
                        this.setState({
                            continuea : '',
                            content: result + number
                        })
                    }
                }
            }else{
                alert("功能暂未拓展！")
            }
        }
    }

    render(){
        const two = ["%","CE","C","delete","1/x","x2","√x","/"];
        const right = ["*","-","+"];
        const bottom = ["+/-",0,".","="];
        let {content,result} = this.state;
        return (
            <div style={{backgroundColor:"black",height:'100vh'}}>
                <div style={{width:330,height:524,backgroundColor:'#cccccc',margin:'auto'}}>
                    <div style={{height:190}}>
                        <div style={{marginLeft:132,fontSize:24,fontWeight:600}}><p style={{paddingTop:8}}>计算器</p></div>
                        <div className="content" style={{display:"flex",flexDirection:"row-reverse",marginTop:40,fontSize:18,color:"gray",marginRight:16,height:18}}>
                            <p>{content}</p>
                        </div>
                        <div className="result" style={{display:"flex",flexDirection:"row-reverse",fontSize:56,fontWeight:700,color:"black",marginRight:16}}>
                            <p style={{marginTop:10}}>{result}</p>
                        </div>
                    </div>
                    <div style={{display:'flex',flexWrap:"wrap"}}>
                        {two.map((item,index)=> <NumberButton number={item} key={item+index} color="#dddddd" buttonClick={this.buttonClick.bind(this)}/> )}
                    </div>
                    <div style={{display:'flex',flexWrap:"wrap",justifyContent:"space-between"}}>
                        <div style={{width:246}}>
                            <NumberButton number = {9}  buttonClick={this.buttonClick.bind(this)} />
                        </div>
                        <div style={{width:84,display:'flex',flexWrap:"wrap",justifyContent:"space-between"}}>
                            {right.map((item,index)=> <NumberButton number={item} key={item+index} color="#dddddd"  buttonClick={this.buttonClick.bind(this)}/>)}
                        </div>
                    </div>
                    <div style={{display:'flex',flexWrap:"wrap",justifyContent:"space-between"}}>
                        {bottom.map((item,index)=> <NumberButton number={item} key={item+index} color={index==3?"#dddddd":null}  buttonClick={this.buttonClick.bind(this)}/>)}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Complete;