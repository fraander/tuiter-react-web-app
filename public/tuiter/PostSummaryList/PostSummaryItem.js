export default function PostSummaryItem(post) {
    return (`
        <div class="list-group">
            <div class="list-group-item">
                <img src=${post.image} class="ms-4 wd-post-image" />
                <p class="text-secondary">${post.topic}</p>
                <span>
                    <span class="mt-4 fw-bold">${post.userName == "" ? post.title : post.userName}</span>
                    <i class="fa fa-check-circle"></i>
                    <span class="fs-normal text-secondary"> • ${post.time}</span>
                </span>
                <p class="fw-bold wd-line-height-1-1rem">${post.title}</p>
                <p class="text-secondary">${post.tweets ? post.tweets + " Tweets" : ""}</p>
            </div>
        </div>
    `);
}