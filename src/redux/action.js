import * as Type from './action-types';

let user = {
    adduser(OB){
        return {
            type:Type.ADD_USER,
            data:OB
        }
    },
    deletedata(INDEX){
        return {
            type:Type.DELETE_USER,
            data:INDEX
        }
    }
}

export default user;