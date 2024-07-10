import App from './App';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {Education} from './pages/Education';

export const RoutesOut = () => {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <HomePage />
                </Route>
                <Route path="/Education">
                    <Education />
                </Route>
            </Routes>
        </Router>
    )
}