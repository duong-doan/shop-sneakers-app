import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import homeRouter from './homeRouter'
import categoryRouter from './categoryRouter'
import cartRouter from './cartRouter'
import productRouter from './productRouter'
import Breadcrumb from '../components/Breadcrumb/index'
import Footer from '../layouts/MainLayout/Footer/index'

const routes = [
  ...homeRouter,
  ...cartRouter,
  ...categoryRouter,
  ...productRouter
]

export const Router = (
  <Switch>
    {routes.map(({ path, Component }, key) => (
      <Route
        key={key}
        path={path}
        exact
        render={props => {
          const crumbs = routes
            // Get all routes that contain the current one.
            .filter(({ path }) => props.match.path.includes(path))
            .map(({ path, ...rest }) => ({
              path: Object.keys(props.match.params).length
                ? Object.keys(props.match.params).reduce(
                    (path, param) =>
                      path.replace(`:${param}`, props.match.params[param]),
                    path
                  )
                : path,
              ...rest
            }))

          return (
            <Fragment>
              <div className='sub-banner'>
                <h1>MEN LIFESTYLE SHOES</h1>
                <Breadcrumb crumbs={crumbs} />
              </div>
              <Component {...props} />
              <Footer />
            </Fragment>
          )
        }}
      />
    ))}
  </Switch>
)
