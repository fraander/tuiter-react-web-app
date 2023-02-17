import p from "./posts.json"
import "./index.css"
import reactStringReplace from 'react-string-replace';

export default function HomeComponent(
    {
        posts = p
    }) {

    const replaceWithLinks = (text) => {
        let replacedText;

        // Match URLs
        const regex = /([\w\.]+\.(?:com|cc|net|ru)[^,\s]*)/
        replacedText = reactStringReplace(text, regex, (match, i) => (
            <a className="text-decoration-underline" key={match + i} href="#">{match}</a>
        ));

        // Match @-mentions
        replacedText = reactStringReplace(replacedText, /@(\w+)/g, (match, i) => (
            <a className="text-decoration-underline" key={match + i} href="#">@{match}</a>
        ));

        // Match hashtags
        replacedText = reactStringReplace(replacedText, /#(\w+)/g, (match, i) => (
            <a className="text-decoration-underline" key={match + i} href="#">#{match}</a>
        ));

        return replacedText
    }

    return (
        <div className="wd-home-container">
            {posts.map((post) => {
                return (
                    <div key={post._id} className="pb-4 pt-3 wd-outline">
                        <div className="ms-5 fw-bold wd-fg-gray">
                            {post.retweeted
                                ? <><i className="bi bi-arrow-repeat"></i> {post.retweeted} Retuited</>
                                : <></>}
                        </div>
                        <div className="container d-flex">
                            <img className="wd-profile-image rounded-circle me-2"
                                 src={require(`../images/${post.profile_img_url}`)}
                                 alt={"profile" +
                                     " photo"}
                            />
                            <div>
                                <p className="mb-0">
                                    <span className="fw-bold">{post.display_name}</span>
                                    {post.verified ? <i className="bi bi-patch-check-fill wd-fg-accent"></i> : <></>}
                                    {" "}<span className="wd-fg-gray">@{post.username}</span>
                                    {" • "}<span className="wd-fg-gray">{post.time_since}</span>
                                </p>
                                <p>{replaceWithLinks(post.body)}</p>

                                {post.image_url
                                    ? <img className="wd-post-image rounded-4 mt-2"
                                           src={require(`../images/${post.image_url}`)}
                                           alt={"profile" +
                                               " photo"}
                                    />
                                    : <></>}

                                {post.quote_tweet
                                    ? <div className="wd-outline rounded-4 p-3">
                                        <p className="my-0 mx-0">
                                            <img className="wd-profile-image-small rounded-circle me-2"
                                                 src={require(`../images/${post.quote_tweet.profile_img_url}`)}
                                                 alt={"profile" +
                                                     " photo"}
                                            />
                                            <span className="fw-bold">{post.quote_tweet.display_name}</span>
                                            {post.verified ?
                                                <i className="bi bi-patch-check-fill wd-fg-accent"></i> : <></>}
                                            {" "}<span className="wd-fg-gray">@{post.quote_tweet.username}</span>
                                            {" • "}<span className="wd-fg-gray">{post.time_since}</span>
                                            <p className="wd-quote-tweet-body">{replaceWithLinks(post.quote_tweet.body)}</p>
                                        </p>
                                    </div>
                                    : <></>
                                }

                                <div className="container d-flex wd-space-between list-inline mt-2">
                                    <li><i className="bi bi-chat"></i> {post.comments}</li>
                                    <li><i className="bi bi-arrow-repeat"></i> {post.retweets}</li>
                                    <li className="wd-fg-red"><i
                                        className="bi bi-heart"></i> {post.likes}</li>
                                    <li><i className="bi bi-share-fill"></i></li>
                                </div>

                                {post.thread
                                    ? <div className="mt-3"><a href="#" className="text-decoration-none">Show this
                                        thread</a></div>
                                    : <></>}

                            </div>
                        </div>
                    </div>
                );
            })}

            <div className="wd-footer wd-outline"></div>
        </div>
    );
}