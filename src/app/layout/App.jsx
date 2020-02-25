import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NarBar from '../../NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NarBar />
      <Container className="main">
        <EventDashboard />
      </Container>
      </Fragment>
    );
  }
}
export default App;
