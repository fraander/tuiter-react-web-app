import {useSelector} from "react-redux";
import ProfileView from "./profile-view";
import "./index.css"

export default function ProfileComponent() {

    const profiles = useSelector(state => state.profile)
    return (<div className="mx-auto">
        {profiles.map((profile, index) => {
            return (<div key={index}>
                <ProfileView profile={profile}/>
            </div>);
        })}
    </div>);
}