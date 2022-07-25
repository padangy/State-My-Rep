import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import StateSearch from './components/StateSearch';
import RepSearch from './components/RepSearch';
import OrgSearch from './components/OrgSearch';
import OrgIDSearch from './components/OrgIDSearch';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StateSearch />}/>
        <Route path="/RepSearch" element={<RepSearch />}/>
        <Route path="/OrgSearch" element={<OrgSearch />}/>
        <Route path="/OrgIDSearch/:orgid" element={<OrgIDSearch />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;