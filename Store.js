import * as React from 'react';

/**
 * If you want to share data between multiple root components, you'll need a
 * global store like Redux. This is similar to building a web app where you
 * want to synchronize data between a sidebar and a main view - just extended
 * into three dimensions.
 * To simplify this sample, we implement a trivial Redux-like store that will
 * ensure all of our elements are synchronized.
 */
const State = {
  wall1: undefined,
  wall2: undefined,
  wall3: undefined
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

const POLY_PATH = 'http://localhost:3000/api/v1/current_user_galleries';

export function initialize() {
  fetch(POLY_PATH)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      
      State.wall1 = data[0]
      State.wall2 = data[1]
      State.wall3 = data[2]

      console.log(State)
      updateComponents();
    });
}


export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      wall1: State.wall1,
      wall2: State.wall2,
      wall3: State.wall3

    };

    _listener = () => {
      this.setState({
        wall1: State.wall1,
        wall2: State.wall2,
        wall3: State.wall3
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }
    render() {
      return (
        <Component
          {...this.props}
          works={this.state}
        />
      );
    }
  };
}
