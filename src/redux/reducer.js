import Type from'./action'

// reducer
export default function reducer(state={user:[
    {id:'Keifer',content:'我擦类'},
    {id:'Keifer',content:'我擦类2'},
    {id:'Keifer',content:'我擦类3'},
    {id:'Keifer',content:'我擦类4'}
]},action){

    switch(action.type){
        case Type.adduser().type:
            let s = state.user.push(action.data)
            return {...state,...s}

        case Type.deletedata().type:
            let u =  state.user.splice(action.data,1)
            return {...state,...u}
        
        default:
            return state;
    }

}

