import p from "./posts.json"
import "./index.css"
import HomePost from "./home-post";

export default function HomeComponent(
    {
        posts = p
    }) {

    return (
        <div className="wd-home-container">
            {posts.map((post) => {
                return (
                    <HomePost key={post._id} post={post} />
                );
            })}

            <div className="wd-footer wd-outline"></div>
        </div>
    );
}