import {createStore} from 'redux';
import reducer from './reducer';

//创建redux容器
let store = createStore(reducer);

export default store;