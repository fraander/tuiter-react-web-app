import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
    <ul class="list-group">
        <div class="list-group-item mb-1"><h3>Who to follow</h3></div>
        ${who.map((w) => {
            return (`${WhoToFollowListItem(w)}`);
        }).join('')}
    </ul>
   `);
}

export default WhoToFollowList;