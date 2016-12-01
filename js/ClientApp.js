import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='props are coool' color='rebeccapurple'/>
        <MyTitle title='props are amazing' color='mediumaquarmarine'/>
        <MyTitle title='props are cool' color='rebeccapurple'/>
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
