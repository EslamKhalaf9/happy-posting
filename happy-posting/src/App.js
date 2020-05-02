import React from 'react';
import Posts from './components/dashboard/Posts';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Navbar from './components/layout/Navbar';
import CreatePost from './components/post/CreatePost';
import PostDetails from './components/post/PostDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/createpost" component={CreatePost} />
          <Route path="/postdetails/:id" component={PostDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
