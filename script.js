import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>This is a mobile-focused HTML page using React</h1>
      <p>Resize the browser window to see how the page adjusts to different screen sizes.</p>
      <button>Click me!</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
