import './App.css';
import { Switch, Route } from 'react-router-dom'

import ContactList from './Components/ContactList/ContactList';
import AddEditContact from './Components/AddEditContact/AddEditContact';
import Home from './Components/Home/Home';

function App() {


  return (
    <div className="App">
      <Home />
      {/* Routes */}
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/(add_contact|edit_contact)" component={AddEditContact} />
      </Switch>
    </div>
  );
}

export default App;
