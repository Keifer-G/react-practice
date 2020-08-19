import React, { useState } from 'react';

import store from '../redux'
import action from '../redux/action'

class App extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            visible:true,
            users:[
                {id:'Keifer',content:'我擦类'},
                {id:'Keifer',content:'我擦类2'},
                {id:'Keifer',content:'我擦类3'},
                {id:'Keifer',content:'我擦类4'}
            ]
        }
        this.handleClick = this.handleClick.bind(this)
        this.delete = this.delete.bind(this)
        //this.isdelete = this.isdelete.bind(this)
    }
    
    componentDidMount(){
        const {users} = this.state
        if(users.length>0){
            this.setState({
                visible:true
            })
        }else{
            this.setState({
                visible:true
            })
        }
    }

/*     componentWillUnmount(){ 
        this.setState({
            user:this.state.user
        })
    } */

    handleClick(){
        let iid = document.getElementById('id')
        let comment = document.getElementById('content')

/*         const {user} = this.state
        const newuser = {id:iid.value,content:comment.value}
        user.push(newuser) */

        //action.adduser({id:iid.value,content:comment.value});

        store.dispatch(action.adduser({id:iid.value,content:comment.value}))
        //this.componentWillUnmount()  这种结合上面的生命周期也可以
        

    }

/*     isdelete(index){
        if(window.confirm('确定要删除评论吗？')){
            return this.delete(index)
        }else{
            return false;
        }
    } */
    delete(index){
        //console.log(index.target.dataset.index)  //e.target.dataset.xxx 获取自定义属性值  data-xx设置自定义属性
        let i = Number(index.target.dataset.index)

/*         const {user} = this.state
        user.splice(i,1)
        this.setState({
            user
        }) */
       store.dispatch(action.deletedata(i));
    }

    render(){

        let {dispatch,subscribe,getState} = store;
            //let {user} = getState()
            //console.log(user)

        subscribe(()=>{
            let {user} = getState()
            this.setState({
                users:user
            })
        })
        
        let {users} = this.state;
        console.log(users)
        return (
            <div>
                <div className='reactcomment' style={{'backgroundColor':'#eeeeee',height:200,width:'100%',}}>
                    <p style={{marginLeft:60,fontSize:60,lineHeight:3}}>请发表对React的评论</p>
                </div>
                <div className="content" style={{marginTop:'20px',marginLeft:60,display:'flex',justifyItems:'center',}}>
                    <form className="left-content">
                        <div>
                            <p style={{marginBottom:3}}>用户名</p>
                            <input id="id" type="text" placeholder="请输入您的用户名" style={{width:200,height:24,borderRadius:5,border:'#dddddd 1px solid',textIndent:4}}/>
                        </div>
                        <div style={{marginTop:12}}>
                            <p style={{marginBottom:3}}>评论内容</p>
                            <input id="content" type="textarea" placeholder="评论内容" style={{width:200,height:94,borderRadius:5,border:'#dddddd 1px solid',textIndent:4,verticalAlign:"top",paddingBottom:40}}/>
                        </div>
                        <button type="button" style={{marginLeft:158,marginTop:10,width:46}} onClick={this.handleClick}>提交</button>
                    </form>
                    <div className="right-content" style={{marginLeft:20}}> 
                        <p style={{fontSize:20}}>评论回复:</p>

                        {
                            this.state.visible?(
                                <div className="on" style={{border:"1px #eeeeee solid",borderRadius:6}} display='none'>
                                    <ul style={{overflow:"scroll",height:200,width:500}}>
                                           { 
                                            users.map((element,index) => {
                                                return (
                                                    <div key={index} index={index} > 
                                                      <li style={{height:100,borderBottom:'solid #eeeeee 1px',display:'flex',justifyContent:'center'}}>
                                                          <div style={{width:400,marginTop:10}}>
                                                              <h2>{element.id+' :'}</h2>
                                                              <p style={{fontSize:12,marginLeft:40,marginTop:10}}>{element.content}</p>
                                                          </div>
                                                          <button  data-index={index} onClick={this.delete} style={{height:20,marginTop:10,marginLeft:30,marginTop:40}}>删除</button>
                                                      </li>
                                                    </div>
                                                    )  
                                            })
                                           }
                                    </ul>
                                </div>
                            ):(
                                <div className="dison"  style={{backgroundColor:"#eeeeee",height:200,width:500,display:'flex',borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                                    <p style={{fontSize:24}}>抱歉！当前还没有评论,左侧提交添加评论！</p>
                                </div>
                            )
                        }
                    </div>
{/*                     <BrowserRouter>
                        
                        <Link to="/search"><button  style={{width:576,marginLeft:12,marginTop:60,height:100,borderRadius:20,outline:'none'}}>我们去搜索</button></Link>
                        
                        <Route path="/search" render={()=>{
                            return <Search/>
                        }}/>
                    </BrowserRouter> */}
                    <a href="/#/search"><button  style={{width:580,marginLeft:20,marginTop:70,height:100,borderRadius:20,outline:'none'}}>我们去搜索</button></a>
                </div>
            </div>
        )
    }
}

export default App;