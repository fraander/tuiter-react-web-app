import replaceWithLinks from "../utils";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

export default function TuitItem({t}) {

    const {
        _id, userName, time, image, liked, replies, retuits, likes, handle, tuit, retuited, title,
    } = t

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (<div className="d-flex gap-4 p-3 pb-1 wd-outline">
        <div>
            <img className="wd-profile-image w- rounded-circle" src={require(`../images/${image}`)} alt="profile"/>
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
            <TuitStats replies={replies} retuits={retuits} likes={likes} liked={liked} retuited={retuited}/>
        </div>
        <i className="bi bi-x-lg float-end"
           onClick={() => deleteTuitHandler(_id)}></i>
    </div>);
}