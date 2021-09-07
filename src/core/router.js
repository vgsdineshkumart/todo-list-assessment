import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {history} from './store';
import Login from '../components/login'
import Dashboard from '../components/dashboard'
import {useEffect} from 'react';

const AppRouter = () => {

    useEffect(() => {
        if (!sessionStorage.getItem('AUTH_KEY')) {
            history.push('/login')
        } else {
            history.push('/dashboard')
        }
    }, [])

    return (
        <Router history={history || {}}>
            <Switch>
                <Route path='/login' component={Login} />
                <Route exact path='/' render={() => <Redirect to={'/login'} />} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </Router>
    )
}

export default AppRouter
