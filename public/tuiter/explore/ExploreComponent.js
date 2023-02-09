import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return (`
        <ul class="wd-flex-container wd-display-inline wd-flex-big wd-flex-align-center">
            <li class="rounded-pill bg-white text-black wd-display-inline wd-flex-container wd-flex-big p-1">
                <label class="ms-3 me-2" id="search-label" for="search-input">
                    <i class="fa fa-search"></i>
                </label>
                <input id="search-input" class="wd-flex-big bg-white text-black" type="text" placeholder="Search Tuiter"/>
            </li>
            <li class="wd-display-flex ms-3 me-3">
                <a id="cog-icon" href="explore-settings.html">
                    <i class="fa fa-cog fa-1x wd-font-20px"></i>
                </a>
            </li>
        </ul>
        <ul class="nav nav-tabs mt-3">
            <li class="nav-item"><a href="for-you.html" class="wd-font-13px nav-link active">For You</a></li>
            <li class="nav-item"><a href="trending.html" class="wd-font-13px nav-link">Trending</a></li>
            <li class="nav-item"><a href="news.html" class="wd-font-13px nav-link">News</a></li>
            <li class="nav-item"><a href="sports.html" class="wd-font-13px nav-link">Sports</a></li>
            <li class="nav-item"><a href="entertainment.html"
                                    class="wd-font-13px nav-link d-block d-xl-block d-lg-block d-md-block d-sm-none">
                Entertainment</a></li>
        </ul>
        <ul class="container p-0 mt-2 mb-5 rounded">
            <img src="../images/shuttle.png" class="card-img">
            <p class="wd-text-overlay text-white fw-bold fs-4 rounded">
                SpaceX's Starship
            </p>
        </ul>
        
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
