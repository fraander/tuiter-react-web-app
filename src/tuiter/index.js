import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomeComponent from "./home";
import {Routes, Route, Navigate} from 'react-router';
import ExploreComponent from "./explore";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer";
import ProfileComponent from "./profile";

const store = configureStore({
    reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}
})

function Tuiter() {
    return (<Provider store={store}>
        <div className={"flex-container mx-auto row pt-2 mx-2"}>
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="/" element={<Navigate to="/tuiter/home"/>}/>
                    <Route path="" element={<Navigate to="/tuiter/home"/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="home" element={<HomeComponent/>}/>
                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    </Provider>);

}

export default Tuiter