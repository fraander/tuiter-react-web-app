import './index.css'
import {updateTuitThunk} from "../../services/tuits-thunks"
import {useDispatch} from "react-redux";

export default function TuitStats({tuit}) {
    const {replies, retuits, likes, liked, retuited} = tuit
    const dispatch = useDispatch()
    return (<ul className="d-flex justify-content-between list-unstyled">
        <li><i className="bi bi-chat"></i> {replies ?? "0"}</li>
        <li><i className={`${retuited ? "text-success" : ""} bi bi-arrow-repeat`}></i> {retuits ?? "0"}</li>
        <li>
            <button className={`bi ${liked ? "bi-heart-fill" : "bi-heart"} ${liked ? "text-danger" : ""}`}
               onClick={() => {
                   dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))
               }}>
            </button> {likes ?? "0"}
        </li>
        <li><i className="bi bi-share-fill"></i></li>
    </ul>);
}