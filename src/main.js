import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // 반드시 './components/App'로 수정해야 합니다.

// 기존의 ReactDOM.render 대신 createRoot를 사용합니다.
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

