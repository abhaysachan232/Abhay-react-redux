import CategoryDropDown from './component/CategoryDropDown'
import ProductWidget from './component/ProductWidget'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import { ProductDetail } from './component/ProductDetail';



function App() {

  
  return (
    <>
    <Router>
      <Route path = "/" exact component = {CategoryDropDown} />
      <Route path = "/" exact component = {ProductWidget} />  
      <Route path = "/Product/:ProductId" exact component = {ProductDetail} />     
    </Router>
    </>
    
  );
}

export default App;
