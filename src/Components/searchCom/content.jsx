import React from 'react';
import propType from 'prop-types'
import user from '../../redux/action';

class Content extends React.Component {

    static contextTypes = {
        contentState: propType.string
    }

    constructor(props, context) {
        super(props, context)

    }

    render() {

        let { userdata } = this.props
        let data = userdata.data
        if (data) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="content" style={{ width: '70%', border: '1px solid #bbb', marginTop: 20,paddingBottom:20, borderRadius: 4 }}>
                        <ul style={{ display: 'flex', justifyContent: 'space-around',flexWrap:'wrap',alignContent:'space-between',width:'100%'}}>

                            {
                                data.items.map((item,index) => {
                                    return (
                                        <li key={index} style={{ listStyle: 'none', width: 200, height: 240, border: '#eee 1px solid', marginLeft: 10, marginTop: 24, borderRadius: 3, }}>

                                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                                                <img src={item.avatar_url} alt="" style={{ width: 200,marginLeft:10,paddingRight:10 }} />
                                            </div>
                                            <p style={{ textAlign: 'center', marginTop: 4 }}>{item.login}</p>

                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{ display: "flex", justifyContent: 'center', marginTop: 100 }}>
                    <h2>正在搜索...</h2>
                </div>
            )
        }
    }
}

export default Content