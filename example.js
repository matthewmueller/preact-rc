const { h, render, Component } = require('preact')
const RC = require('./')

const Alert = RC(function (props) {
  return h(AlertBox, props)
})

class App extends Component {
  onClick () {
    Alert.setState({ message: 'ALERT!!!!' })
  }

  render () {
    return h('button', { onClick: this.onClick.bind(this) }, 'Click me')
  }
}

class AlertBox extends Component {
  componentWillReceiveProps () {
    setTimeout(() => this.setState({ hide: true }), 1000)
    this.setState({ hide: false })
  }

  render (props, state = {}) {
    if (!props.message || state.hide) return null
    return h(Error, props)
  }
}

class Error extends Component {
  render (props) {
    return h('div', { key: 'alert', style: 'background: red; color: white' }, props.message)
  }
}

render(h('div', {}, [ h(Alert), h(App) ]), document.body)
