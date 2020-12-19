import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./components/Header/Header";
import SignUp from "./containers/SignUp/SignUp";
import SignIn from "./containers/SignIn/SignIn";
import Main from "./containers/Main/Main";
import AddPhoto from "./containers/AddPhoto/AddPhoto";
import MyPhotos from "./containers/MyPhotos/MyPhotos";
import {useSelector} from "react-redux";

const ProtectedRoute = ({isAllowed, ...props}) => {
    return isAllowed ? <Route {...props} /> : <Redirect to="/" />
};

function App() {
    const user = useSelector(state => state.users.user);
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/" exact component={Main}/>
                <ProtectedRoute
                    path="/signup"
                    exact
                    component={SignUp}
                    isAllowed={!user}
                />
                <ProtectedRoute
                    path="/signin"
                    exact
                    component={SignIn}
                    isAllowed={!user}
                />
                <ProtectedRoute
                    path="/addphoto"
                    exact
                    component={AddPhoto}
                    isAllowed={user}
                />
                <ProtectedRoute
                    path="/users/:id"
                    exact
                    component={MyPhotos}
                    isAllowed={user}
                />
                <Route render={() => <h1>404</h1>}/>
            </Switch>
        </div>
    );
}

export default App;
