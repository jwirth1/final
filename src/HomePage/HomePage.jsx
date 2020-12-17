import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
//import Chart from 'chart.js';
//import axios from 'axios';


class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
              {/*  <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
              {users.error && <span className="text-danger">ERROR: {users.error}</span>} */}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                
            </div>
        );
    }
}

function Data() {
    const [title, setTitle] = useState('')
    const [budget, setBudget] = useState('')
    const submit = e => {
      e.preventDefault()
      fetch(`https://hooks.zapier.com/hooks/catch/1239764/oo73gyz/`, {
        method: 'POST',
        body: JSON.stringify({ title, budget }),
      })
    }
    return (
      <form>
        <label htmlFor="budget">Your budget</label>
        <textarea
          name="budget"
          value={budget}
          onChange={e => setBudget(e.target.value)}
          />
        <br />
        <label htmlFor="title">Your title</label> <br />
        <input
          type="title"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
         />
        <br />
        <button type="submit">Send it!</button>
      </form>
    )
  }
  
  
function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };