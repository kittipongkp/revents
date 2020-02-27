import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false,
    selectEvent: null
  };

  // handleIsOpenToggle = () =>{
  //     this.setState((prevState) => ({
  //         isOpen: !prevState.isOpen
  //     }))
  // }

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectEvent: null
    });
  };

  handleCreateFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  hamdleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';

    this.setState({
      events: [...this.state.events, newEvent],
      isOpen: false
    });
  };

  handleSelectEvent = event => {
    this.setState({
      selectEvent: event,
      isOpen: true
    });
  };

  handleUpdateEvent = updateEvent => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updateEvent.id) {
          return { ...updateEvent };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectEvent: null
    });
  };

  handleDeleteEvent = id => {
    this.setState({
      events: this.state.events.filter(e => e.id !== id)
    });
  };

  render() {
    const { events, isOpen, selectEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleCreateFormOpen}
            positive
            content='Create Event'
          />
          {isOpen && (
            <EventForm
              key={selectEvent ? selectEvent.id : 0}
              updateEvent={this.handleUpdateEvent}
              createEvent={this.hamdleCreateEvent}
              cancelFormOpen={this.handleCreateFormCancel}
              selectEvent={selectEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
