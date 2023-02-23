import "./index.css"
import {useState} from "react";

export default function ProfileView({profile}) {

    const [showEdit, setShowEdit] = useState(true)

    const {
        firstName,
        lastName,
        handle,
        profilePicture,
        bannerPicture,
        bio,
        website,
        location,
        dateOfBirth,
        dateJoined,
        followingCount,
        followersCount,
        tuits
    } = profile

    return (<div>
        <div className="d-flex justify-content-start align-items-center gap-3">
            {showEdit ? <>
                <button onClick={() => setShowEdit(false)}><i className="bi bi-x"></i></button>
                <p className="fs-3 fw-bolder mb-3 mt-3">Edit Profile</p>
            </> : <>
                <i className="bi bi-arrow-left mb-3"></i>
                <div>
                    <p className="fs-3 fw-bolder mb-1">{firstName}{" "}{lastName}</p>
                    <p className="mb-3">{tuits} Tuits</p>
                </div>
            </>}
        </div>
        <div className="d-flex flex-column position-relative">
            <img className="wd-banner" src={require(`../images/${bannerPicture}`)} alt="banner"/>
            <div className="d-flex align-items-center justify-content-end px-3 py-2">
                <img className="wd-profile wd-profile-overlay rounded-circle"
                     src={require(`../images/${profilePicture}`)} alt="profile"/>
                {
                    showEdit ?
                        <div
                            className="wd-profile-overlay wd-profile rounded-circle d-flex justify-content-center align-items-center bg-black opacity-50">
                            <i className="bi bi-camera text-white fs-1"></i>
                        </div> : <></>
                }


                <div>
                    <button
                        className={`rounded-pill text-black fw-bold btn btn-outline-secondary ${showEdit ? "opacity-0" : ""}`}
                        onClick={() => setShowEdit(true)}>
                        Edit profile
                    </button>
                </div>
            </div>
        </div>
        <div className="mt-3">
            <p className="mb-1 fs-3 fw-bold">{firstName}{" "}{lastName}</p>
            <p className="mb-3 text-secondary">@{handle}</p>
            <p>{bio}</p>
            <div className="text-secondary">
                <span className="me-4"><i className="bi bi-geo-alt"></i>
                    {" "}{location}</span>
                <span className="me-4"><i className="bi bi-balloon"></i>
                    {" "}Born {dateOfBirth}</span>
                <span className="me-4"><i className="bi bi-calendar"></i>
                    {" "}Joined {dateJoined}</span>
            </div>
            <div className="d-flex list-unstyled text-secondary">
                <span className="me-4"><i className="bi bi-link-45deg"></i>
                    {" "}{website}</span>
            </div>
            <div className="d-flex list-unstyled text-secondary mt-2">
                <span className="me-4"><b>{followingCount}</b> Following</span>
                <span className="me-4"><b>{followersCount}</b> Followers</span>
            </div>
        </div>
    </div>);
}