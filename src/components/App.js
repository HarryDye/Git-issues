import React, {Component} from 'react';
import { Provider } from './Context';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
// import axios from 'axios';

//imported App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Charts from './Charts';
import NotFound from './NotFound';
import Feature from './Feature.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   axios.get('https://api.github.com/repos/rails/rails/issues')
  //     .then(response => {
  //       this.setState({stats: response.data})
  //     })
  //     .catch(error =>{
  //       console.log('Error', error)
  //     });
  // }

  render() {
    return (
      <Provider value={this.state.stats}>
          <BrowserRouter>
              <div className="container">
                  <Header />
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/charts/:company" component={({match}) => <Charts match={match} />} />
                      <Route path="/feature" component={Feature} test={this.stats} />
                      <Route component={NotFound} />
                  </Switch>
              </div>
         </BrowserRouter>
       </Provider>
     );
   }
}

export default App;
