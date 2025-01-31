import { createRoot } from 'react-dom/client';

import './main.css';

const root = createRoot(document.querySelector('#app'));
root.render(<h2>Hello from React!</h2>);