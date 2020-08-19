import React from 'react';
import ReactDom from 'react-dom';
import Router from './router/index'


// 不需要引入需要渲染的html的index入口文件




ReactDom.render(<Router />,document.getElementById('app'));

