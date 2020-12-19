import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./components/Header/Header";
import SignUp from "./containers/SignUp/SignUp";
import SignIn from "./containers/SignIn/SignIn";
import Main from "./containers/Main/Main";
// import {useSelector} from "react-redux";

// const ProtectedRoute = ({isAllowed, ...props}) => {
//     return isAllowed ? <Route {...props} /> : <Redirect to="/signin" />
// };

function App() {
    // const user = useSelector(state => state.users.user);
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/signup" exact component={SignUp}/>
                <Route path="/signin" exact component={SignIn}/>
                {/*<ProtectedRoute*/}
                {/*    path="/addartist"*/}
                {/*    exact*/}
                {/*    component={AddArtist}*/}
                {/*    isAllowed={user && user.user.role === "user"}*/}
                {/*/>*/}
                {/*<ProtectedRoute*/}
                {/*    path="/addalbum"*/}
                {/*    exact*/}
                {/*    component={AddAlbum}*/}
                {/*    isAllowed={user && user.user.role === "user"}*/}
                {/*/>*/}
                {/*<ProtectedRoute*/}
                {/*    path="/addtrack"*/}
                {/*    exact*/}
                {/*    component={AddTrack}*/}
                {/*    isAllowed={user && user.user.role === "user"}*/}
                {/*/>*/}
                <Route render={() => <h1>404</h1>}/>
            </Switch>
        </div>
    );
}

export default App;
