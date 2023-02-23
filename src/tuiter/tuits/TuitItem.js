import reactStringReplace from "react-string-replace";
import TuitStats from "./TuitStats";


export default function TuitItem({t}) {
    const replaceWithLinks = (text) => {
        let replacedText;

        // Match URLs
        const regex = /([\w.]+\.(?:com|cc|net|ru)[^,\s]*)/
        replacedText = reactStringReplace(text, regex, (match, i) => (
            <button className="text-decoration-underline" key={match + i}>{match}</button>
        ));

        // Match @-mentions
        replacedText = reactStringReplace(replacedText, /@(\w+)/g, (match, i) => (
            <button className="text-decoration-underline" key={match + i}>@{match}</button>
        ));

        // Match hashtags
        replacedText = reactStringReplace(replacedText, /#(\w+)/g, (match, i) => (
            <button className="text-decoration-underline" key={match + i}>#{match}</button>
        ));

        return replacedText
    }

    const {
        _id,
        userName,
        time,
        image,
        liked,
        replies,
        retuits,
        likes,
        handle,
        tuit,
        retuited,
        title,
    } = t

    return (
        <div className="d-flex gap-4 p-3 pb-1 wd-outline">
            <div>
                <img className="wd-profile-image w- rounded-circle" src={require(`../images/${image}`)} alt="profile"/>
            </div>
            <div>
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
        </div>
    );
}