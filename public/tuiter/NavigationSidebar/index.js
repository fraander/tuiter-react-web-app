const NavigationSidebar = () => {
    return (`
        <div class="list-group">
            <a class="list-group-item list-group-item-action" href="/public">
                <i class="fab fa-twitter"></i>
            </a>
            <a class="list-group-item list-group-item-action" href="">
                <i class="fa fa-1x fa-home"></i>
                <span class="d-none d-xxl-inline d-xl-inline">Home</span>
            </a>
            <a class="list-group-item list-group-item-action active" href="explore.html">
                <i class="fa fa-1x fa-hashtag"></i>
                <span class="d-none d-xxl-inline d-xl-inline">Explore</span>
            </a>
            <a class="list-group-item list-group-item-action" href="notifications.html">
                <i class="fa fa-1x fa-bell"></i>
                <span class="d-none d-xxl-inline d-xl-inline">Notifications</span>
            </a>
            <a class="list-group-item list-group-item-action" href="messages.html">
                <i class="fa fa-1x fa-envelope"></i>
                <span class="d-none d-xxl-inline d-xl-inline">Messages</span>
            </a>
            <a class="list-group-item list-group-item-action" href="bookmarks.html">
                <i class="fa fa-1x fa-bookmark"></i>
                <span class="d-none d-xxl-inline d-xl-inline">Bookmarks</span>
            </a>
            <a class="list-group-item list-group-item-action" href="lists.html">
                <i class="fa fa-1x fa-list"></i>
                <span class="d-none d-xxl-inline d-xl-inline">Lists</span>
            </a>
            <a class="list-group-item list-group-item-action" href="profile.html">
                <i class="fa fa-1x fa-user"></i>
                <span class="d-none d-xxl-inline d-xl-inline ">Profile</span>
            </a>
            <a class="list-group-item list-group-item-action" href="more.html">
                <span id="more-toolbar-item" class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-ellipsis-h fa-inverse text-black fa-stack-1x"></i>
                </span>
                <span class="d-none d-xxl-inline d-xl-inline">More</span>
            </a>
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
        </div>
    `);
}
export default NavigationSidebar;