// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 导入 App 组件

// 渲染根组件到 DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);