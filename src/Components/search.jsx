import React from 'react';
import Header from './searchCom/header';
import Body from './searchCom/body';


import propType from 'prop-types';

class Search extends React.Component{

    constructor(props){
        super(props)
        this.state={
            contentState:'',
            isSearch:false
        }
    }

    static childContextTypes={
        contentState:propType.string,
        isSearch:propType.bool,
        callback:propType.func,
        callbackT:propType.func
    }

    getChildContext(){
        let {contentState,isSearch} = this.state
        return {
            contentState,
            isSearch,
            callback:this.userData,
            callbackT:this.sear
        }
    }

    sear=()=>{
        let{isSearch} = this.state
        isSearch=false
        this.setState({
            isSearch
        })
    }
    userData =(data)=>{
        
        let {contentState,isSearch} = this.state;
        contentState = data;
        isSearch=true
        this.setState({
            contentState,
            isSearch
        })
    }

    render(){
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        )
    }
}

export default Search;