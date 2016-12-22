# Preact RC

Remote control your Preact components! Here's a [demo](http://jsbin.com/cagirom/1/edit?html,js,output).

Trigger components from other parts of the virtual DOM tree without holding onto any of their state.

Useful for modals, callouts, and alerts.

## Installation

```js
npm install preact-rc
```

## Example

```js
Alert = RC(function (props) {
  return <AlertBox {...props} />
})

// <Alert /> will now render <AlertBox>
// Alert.setState({ ... }) will pass props into AlertBox
```

## License

MIT
