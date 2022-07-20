//This is where you're rendering the components
import {Routes, Route} from 'react-router-dom';
import StateSearch from './components/StateSearch';
import RepSearch from './components/RepSearch';
import OrgSearch from './components/OrgSearch';
import NotFound from './components/NotFound';

function Container() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StateSearch />}/>
        <Route path="/RepSearch" element={<RepSearch />}/>
        <Route path="/OrgSearch" element={<OrgSearch />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default Container;