import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetalis from './BlogDetails';
import MotFound from './NotFound';

function App() {

  return (
<Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetalis />
            </Route>
            <Route path="*">
               <MotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router> 
  );
}


export default App;
