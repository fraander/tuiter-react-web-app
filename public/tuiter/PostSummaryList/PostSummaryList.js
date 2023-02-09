import exploreItems from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    console.log(exploreItems)
    return (`
        <div class="list-group">
            ${exploreItems.map((post) => {
                return (`${PostSummaryItem(post)}`);
            }).join('')}
        </div>
    `);
}
export default PostSummaryList;