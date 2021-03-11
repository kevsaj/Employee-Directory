import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import Header from './components/Header';
import UsersList from './components/UsersList';
import './css/styles.css';

import { createStore } from 'redux';
import usersReducer from './reducers/users';

const store = createStore(usersReducer);

store.subscribe(() => {
    console.log('store data:', store.getState());
});

const addUsers = (users) => {
    return {
        type: 'ADD_USERS',
        users
    };
};


class App extends React.Component {
    componentDidMount() {
        axios.get('https://randomuser.me/api/?page=1&results=10')
            .then(response => {
                console.log(response.data);
                store.dispatch(addUsers(response.data.results));
            })
    }
    render() {
        return (
            <div className="main-section">
                <Header />
                <UsersList />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

export default App;
