import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import { Router } from './routes'
import { authRouter } from './routes/authRouter'

const Footer = React.lazy(() => import('./layouts/MainLayout/Footer/index'))

function App() {
  console.log(Router)
  return (
    <Fragment>
      <React.Suspense
        fallback={
          <Spinner
            style={{
              width: '10rem',
              height: '10rem',
              position: 'absolute',
              top: '40%',
              left: '50%'
            }}
            color='primary'
          />
        }
      >
        <BrowserRouter>
          <div className='App'>{Router}</div>
          {authRouter.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.Component}
            />
          ))}
        </BrowserRouter>
      </React.Suspense>
    </Fragment>
  )
}

export default App
