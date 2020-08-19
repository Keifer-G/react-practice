import React from 'react';
import Content from './content'
import { getUser } from '../../network'
import propType from 'prop-types'

class Body extends React.Component{

    static contextTypes={
        contentState:propType.string,
        isSearch:propType.bool,
        callbackT:propType.func
    }


    constructor(props,context){
        super(props,context)
        this.state={
            userdata:{},
            failed:false
        }
    }



    render(){
        let {contentState,isSearch,callbackT} = this.context
        let {userdata,failed} = this.state
        if(isSearch===true){
            callbackT()
            getUser(contentState).then(res=>{
                userdata = res
                //console.log(userdata)
                this.setState({
                    userdata
                })
            }).catch(()=>{
                this.setState({
                    failed:true
                })
            })
        }

        if(contentState===''){
            return (
                <div className='body' style={{display:'flex',justifyContent:'center',marginTop:100}}>
                    <h2>请输入您要搜索的关键词！</h2>
                </div>
            )
        }else if(failed===true){
            return (
                <div className="body" style={{display:'flex',justifyContent:'center',marginTop:100}}>
                    <h2>您请求的数据不存在！</h2>
                </div>
            )
        }else{
            return (
                <div>
                    <Content userdata={userdata}/>
                </div>
            )
        }

    }
}

export default Body;