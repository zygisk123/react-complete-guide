import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //it tells React that element which id is root should be the main place where the React application gets rendered to
root.render(<App />); // it tells what should be rendered into root element which is <div id="root"></div> in ./public/index.html
