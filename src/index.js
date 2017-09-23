import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ResultsDisplay from './components/results-display';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ResultsDisplay />, document.getElementById('root'));
registerServiceWorker();
