import React from 'react'
import Nav from '../nav/nav.js'
import styles from './styles.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav></Nav>
        {this.props.children}
      </div>
    );
  }
}