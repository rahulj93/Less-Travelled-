import React from 'react';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import {Route} from 'react-router-dom'
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
// import BackgroundVideo from './backgroundVideo/backgroundVideo';
import AttractionsForm from './attraction_form/attraction_form_container'

import AttractionsContainer from './attractions_index/attractions_container'

import AttractionsShowContainer from './search/attraction_show_container';

// import AttractionShowContainer from './search/attraction_show_container';

import Modal from './modal/modal'
import MainPage from './main/main_page';
// import LoginFormContainer from './session/login_form_container'; ####
// import SignupFormContainer from './session/signup_form_container'; ####


const App = () => (
  <div>
    <NavBarContainer />
    <Modal />

    <Switch>
        {/* <AuthRoute exact path="/" component={MainPage} /> */}
        <Route exact path="/" component={MainPage} />
        {/* <ProtectedRoute exact path="/attractions" component={AttractionsContainer} /> */}
        <Route exact path="/attractions" component={AttractionsContainer} />
        <ProtectedRoute exact path="/attractionsform" component={AttractionsForm} />

        <AuthRoute exact path="/attractions" component={AttractionsContainer} />

      <Route exact path="/attractions/:id" component={AttractionsShowContainer}/>
        {/* <h1> {console.log()} </h1> */}
      {/* <AuthRoute exact path={`/attractions/${this.props.attraction._id}`} component={AttractionsShowContainer} /> */}
      {/* <Route path="/attractions/:id" component={AttractionsShowContainer} /> */}

        <ProtectedRoute exact path="/attractionsform" component={AttractionsForm} />


    </Switch>
  </div>
);

export default App;