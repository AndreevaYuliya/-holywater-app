import React from 'react'

import { Provider } from 'react-redux'

import NavigationRoot from './navigation/navigation-root'

import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationRoot />
    </Provider>
  )
}

export default App
