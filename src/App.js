import React from 'react';
import {makeMainRoutes} from './components/routes';
import "./assets/scss/styles.scss";

const routes = makeMainRoutes();

function App() {
  return (
    <div>
        {routes}
    </div>
  );
}

export default App;
