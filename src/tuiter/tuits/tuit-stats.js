import './index.css'

export default function TuitStats({replies, retuits, likes, liked, retuited, deleteHandler}) {
    return (<ul className="d-flex justify-content-between list-unstyled">
            <li><i className="bi bi-chat"></i> {replies ?? "0"}</li>
            <li><i className={`${retuited ? "text-success" : ""} bi bi-arrow-repeat`}></i> {retuits ?? "0"}</li>
            <li><i
                className={`bi ${liked ? "bi-heart-fill" : "bi-heart"} ${liked ? "text-danger" : ""}`}></i> {likes ?? "0"}
            </li>
            <li><i className="bi bi-share-fill"></i></li>
        </ul>);
}