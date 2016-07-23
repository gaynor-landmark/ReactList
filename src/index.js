"use strict"

import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import { browserHistory, Router } from 'react-router'
import domready from 'domready'


domready(() => {
  render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
  )
})
