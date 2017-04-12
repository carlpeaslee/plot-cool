import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Datacombs from './Datacombs'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route
          path={'/datacombs'}
          component={Datacombs}
        />
      </div>
    )
  }
}
