function WhoToFollowListItem(who) {
    return (`
    <div class="list-group-item wd-display-flex wd-justify-space-between">
        <a class="wd-profile-link wd-display-flex">
            <img src=${who.avatarIcon} class="me-2 wd-profile-image">
            <div>
                ${who.userName} <i class="fa fa-check-circle"></i>
                <p class="wd-fg-dark-gray">@${who.handle}</p>
            </div>
        </a>
        <button class="btn btn-primary rounded-pill">Follow</button>
    </div>
    `);
}

export default WhoToFollowListItem;