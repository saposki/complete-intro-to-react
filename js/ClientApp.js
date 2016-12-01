import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <HashRouter>
        <div>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search}/>
        </div>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
