import replaceWithLinks from "../utils";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

export default function TuitItem({t}) {

    const {
        _id, userName, time, image, handle, tuit, title,
    } = t

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (<div className="d-flex gap-4 p-3 pb-1 wd-outline">
        <div>
            <img className="wd-profile-image w- rounded-circle" src={require(`../images/${image ?? "react.png"}`)}
                 alt="profile"/>
        </div>
        <div className="d-flex flex-column mx-auto w-100">
            <div>
                <p className="mb-0">
                    <span className="fw-bold">{userName}</span>
                    <span>{" "}<i className="bi bi-patch-check-fill wd-fg-accent"></i></span>
                    <span className="fw-light">{" "}{handle}</span>
                    <span className="fw-light">{" • "}{time}</span>
                </p>
                <p>{replaceWithLinks(tuit ?? title)}</p>
            </div>
            <TuitStats tuit={t}/>
        </div>
        <i className="bi bi-x-lg float-end"
           onClick={() => deleteTuitHandler(_id)}></i>
    </div>);
}