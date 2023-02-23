import "./index.css"
import {useState} from "react";
import ProfileTextField from "./profile-text-field";
import {useDispatch} from "react-redux";
import {updateProfile} from "./profile-reducer";

export default function ProfileView({profile}) {

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

    const [showEdit, setShowEdit] = useState(false)

    const [nameEdit, setName] = useState(firstName + " " + lastName)
    const [bioEdit, setBio] = useState(bio)
    const [locationEdit, setLocation] = useState(location)
    const [websiteEdit, setWebsite] = useState(website)
    const [dobEdit, setDob] = useState(dateOfBirth)


    const dispatch = useDispatch();
    const saveHandler = () => {
        const nameParts = nameEdit.split(" ") ?? nameEdit
        const firstNameEdit = nameParts[0] ?? nameEdit
        const lastNameEdit = nameParts[1] ?? ""

        // firstNameEdit, lastNameEdit, bioEdit, locationEdit, websiteEdit, dobEdit
        const updatedProfile = {
            firstName: firstNameEdit,
            lastName: lastNameEdit,
            handle: "fra_ander",
            profilePicture: "profile-frank.jpeg",
            bannerPicture: "shuttle.png",
            bio: bioEdit,
            website: websiteEdit,
            location: locationEdit,
            dateOfBirth: dobEdit,
            dateJoined: "6/2020",
            followingCount: 104,
            followersCount: 45,
            tuits: "6,114"
        }

        dispatch(updateProfile(updatedProfile));
        setShowEdit(false);
    }

    const cancelHandler = () => {
        setShowEdit(false)
        setName(firstName + " " + lastName)
        setBio(bio)
        setLocation(location)
        setWebsite(website)
        setDob(dateOfBirth)
    }

    return (<div>
        <div
            className={`d-flex ${showEdit ? "justify-content-between" : "justify-content-start"} align-items-center gap-3 header-height pb-2`}>
            {showEdit ? <>
                <div className="d-flex gap-3">
                    <button onClick={() => {
                        cancelHandler()
                    }}><i className="bi bi-x"></i></button>
                    <p className="fs-3 fw-bolder mb-0">Edit Profile</p>
                </div>
                <button
                    className="rounded-pill text-white bg-black fw-bold btn wd-justify-self-end"
                    onClick={() => {
                        saveHandler()
                    }}>
                    Save
                </button>
            </> : <>
                <i className="bi bi-arrow-left"></i>
                <div>
                    <p className="fs-3 fw-bolder mb-0">{firstName}{" "}{lastName}</p>
                    <p className="mb-0">{tuits} Tuits</p>
                </div>
            </>}
        </div>
        <div className="d-flex flex-column position-relative">
            <img className="wd-banner" src={require(`../images/${bannerPicture}`)} alt="banner"/>
            <div className="d-flex align-items-center justify-content-end ps-3 py-2">
                {showEdit ? <div
                    className="banner-overlay d-flex justify-content-center align-items-center bg-black opacity-50">
                    <i className="bi bi-camera text-white fs-1"></i>
                </div> : <></>}
                <img className="wd-profile wd-profile-overlay rounded-circle"
                     src={require(`../images/${profilePicture}`)} alt="profile"/>
                {showEdit ? <div
                    className="wd-profile-overlay wd-profile rounded-circle d-flex justify-content-center align-items-center bg-black opacity-50">
                    <i className="bi bi-camera text-white fs-1"></i>
                </div> : <></>}


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
            {showEdit ? <ProfileTextField label={"Name"} get={nameEdit} set={setName}/> : <>
                <p className="mb-1 fs-3 fw-bold">{firstName}{" "}{lastName}</p>
                <p className="mb-3 text-secondary">@{handle}</p>
            </>}

            {showEdit ? <ProfileTextField label={"Bio"} get={bioEdit} set={setBio} multiline={true}/> : <p>{bio}</p>}

            {showEdit ? <>
                <ProfileTextField label={"Location"} get={locationEdit} set={setLocation}/>
                <ProfileTextField label={"Website"} get={websiteEdit} set={setWebsite}/>
                <div>
                    <ProfileTextField label={"Birth date"} get={dobEdit} set={setDob}/>
                </div>
                <button className="w-100 d-flex justify-content-between my-5">
                    <div className="text-secondary fw-bol mb-0">Switch to professional</div>
                    <i className="bi bi-chevron-right"></i>
                </button>
            </> : <>
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
            </>}


        </div>
    </div>);
}