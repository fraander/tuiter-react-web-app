import './index.css'
import {updateTuitThunk} from "../../services/tuits-thunks"
import {useDispatch} from "react-redux";

export default function TuitStats({tuit}) {
    const {replies, retuits, likes, liked, retuited, disliked, dislikes} = tuit
    const dispatch = useDispatch()
    return (<ul className="d-flex justify-content-between list-unstyled">
        <li><i className="bi bi-chat"></i> {replies ?? "0"}</li>
        <li><i className={`${retuited ? "text-success" : ""} bi bi-arrow-repeat`}></i> {retuits ?? "0"}</li>
        <li>
            <button className={`bi ${liked ? "bi-heart-fill" : "bi-heart"} ${liked ? "text-danger" : ""}`}
                    onClick={() => {
                        if (tuit.liked) {
                            dispatch(updateTuitThunk({...tuit, likes: tuit.likes - 1, liked: false}))
                        } else {
                            dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1, liked: true}))
                        }
                    }}>
            </button>
            {" " + likes ?? "0"}
        </li>
        <li>
            <button className={`bi ${disliked ? "bi-hand-thumbs-down-fill" : "bi-hand-thumbs-down"} ${disliked ? "text-info" : ""}`}
                    onClick={() => {
                        if (tuit.disliked) {
                            dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes - 1, disliked: false}))
                        } else {
                            dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1, disliked: true}))
                        }
                    }}>
            </button>
            {" " + dislikes ?? "0"}
        </li>
        <li><i className="bi bi-share-fill"></i></li>
    </ul>);
}