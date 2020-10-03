import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserListComponent from './screens/userlist/UserListComponent'
import { Provider } from "react-redux"
import Store from '../redux/store/Store'

function AppRouter() {
    return (
        <Provider store={Store}>
            <Router>
                <Switch>
                    <Route path='/' exact component={UserListComponent}></Route>
                </Switch>
            </Router>
        </Provider>

    )
}

export default AppRouter
