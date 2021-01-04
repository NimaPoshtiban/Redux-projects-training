import React from 'react';
import LanguageDetail from './LanguageDetail';
import Languages from './Languages';

const App = () => {
  return (
    <div className="container ui grid">
      <div className="ui row">
        <div className="column eight wide">
          <Languages />
        </div>
        <div className="column eight wide">
          <LanguageDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
