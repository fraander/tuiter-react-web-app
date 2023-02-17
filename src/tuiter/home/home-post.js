import p from "./posts.json";
import reactStringReplace from "react-string-replace";

export default function HomePost(
    {
        post: {
            _id,
            body,
            comments,
            display_name,
            image_url,
            likes,
            profile_img_url,
            quote_tweet,
            retweeted,
            retweets,
            thread,
            time_since,
            username,
            verified
        } = p
    }) {
    const replaceWithLinks = (text) => {
        let replacedText;

        // Match URLs
        const regex = /([\w.]+\.(?:com|cc|net|ru)[^,\s]*)/
        replacedText = reactStringReplace(text, regex, (match, i) => (
            <a href="#" className="text-decoration-underline" key={match + i}>{match}</a>
        ));

        // Match @-mentions
        replacedText = reactStringReplace(replacedText, /@(\w+)/g, (match, i) => (
            <a href="#" className="text-decoration-underline" key={match + i}>@{match}</a>
        ));

        // Match hashtags
        replacedText = reactStringReplace(replacedText, /#(\w+)/g, (match, i) => (
            <a href="#" className="text-decoration-underline" key={match + i}>#{match}</a>
        ));

        return replacedText
    }

    return (
        <div key={_id} className="pb-4 pt-3 wd-outline">
            <div className="ms-5 fw-bold wd-fg-gray">
                {retweeted
                    ? <><i className="bi bi-arrow-repeat"></i> {retweeted} Retuited</>
                    : <></>}
            </div>
            <div className="container d-flex">
                <img className="wd-profile-image rounded-circle me-2"
                     src={require(`../images/${profile_img_url}`)}
                     alt={"profile" +
                         " photo"}
                />
                <div>
                    <p className="mb-0">
                        <span className="fw-bold">{display_name}</span>
                        {verified ? <i className="bi bi-patch-check-fill wd-fg-accent"></i> : <></>}
                        {" "}<span className="wd-fg-gray">@{username}</span>
                        {" • "}<span className="wd-fg-gray">{time_since}</span>
                    </p>
                    <p>{replaceWithLinks(body)}</p>

                    {image_url
                        ? <img className="wd-post-image rounded-4 mt-2"
                               src={require(`../images/${image_url}`)}
                               alt={"profile" +
                                   " photo"}
                        />
                        : <></>}

                    {quote_tweet
                        ? <div className="wd-outline rounded-4 p-3">
                            <div className="my-0 mx-0">
                                <img className="wd-profile-image-small rounded-circle me-2"
                                     src={require(`../images/${quote_tweet.profile_img_url}`)}
                                     alt={"profile" +
                                         " photo"}
                                />
                                <span className="fw-bold">{quote_tweet.display_name}</span>
                                {verified ?
                                    <i className="bi bi-patch-check-fill wd-fg-accent"></i> : <></>}
                                {" "}<span className="wd-fg-gray">@{quote_tweet.username}</span>
                                {" • "}<span className="wd-fg-gray">{time_since}</span>
                                <p className="wd-quote-tweet-body">{replaceWithLinks(quote_tweet.body)}</p>
                            </div>
                        </div>
                        : <></>
                    }

                    <div className="container d-flex wd-space-between list-inline mt-2">
                        <li><i className="bi bi-chat"></i> {comments}</li>
                        <li><i className="bi bi-arrow-repeat"></i> {retweets}</li>
                        <li className="wd-fg-red"><i
                            className="bi bi-heart"></i> {likes}</li>
                        <li><i className="bi bi-share-fill"></i></li>
                    </div>

                    {thread
                        ? <div className="mt-3"><a href="#" className="text-decoration-none">Show this
                            thread</a></div>
                        : <></>}

                </div>
            </div>
        </div>
    );
}