import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route } from 'react-router-dom';


// class App extends Component {
//   state = {
//     questions: [
//       { question: What are you doing?, answer: 'jkdlj'},
//       { question: What is state?, answer: 'dkljflkajd'},
//       {question: What is babel?, answer: 'jf;klaj'}
//     ]
//   }
//   render() {
//     const { questions } = this.state
//     return(
//       <div>
//         <div className="App-title">Flash Cards</div>
//       </div>
//     )
//   }
// }




const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;
