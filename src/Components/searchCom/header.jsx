import React from 'react';
import propType from 'prop-types'

class header extends React.Component {

    static contextTypes={
        callback:propType.func
    }

    constructor(props,context) {
        super(props,context)

    }

    render() {
        let {callback} = this.context
        return (
            
            <div>
                
                <div className="header" style={{ width: '100%', height: 200, backgroundColor: '#eeeeee',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{marginRight:40,fontSize:40}}>关键词搜索</p>
                    <input id="inp" type="text" placeholder="请输入关键字" style={{ width: 400, height: 28, outline: 'none', borderRadius: 4, border: '1px solid #a3a3a3',paddingLeft:3 }} />
                    <button style={{ width: 50, height: 28, borderRadius: 3, marginLeft: 10, backgroundColor: '#fff' }} onClick={()=>{
                        let inp = document.getElementById('inp')
                        let data = inp.value
                        callback(data)
                    }}>提交</button>
                </div>
            </div>
        )
    }
}

export default header;