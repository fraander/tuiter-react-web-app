import homeItems from "./homePosts.js";

export default function PostList() {
    return (`
        ${homeItems.map((post) => {
        return (`
            <div id="posts" class="wd-outline">
            <div class="wd-post wd-flex-container wd-padding-horizontal-16px wd-padding-vertical-12px">
                <a class="wd-float-left">
                    <img class="wd-profile-image" src=${post.profileImg} />
                </a>
                <div class="wd-margin-16px-left wd-display-inline-block wd-float-left wd-max-width-506px">
                    <h5 class="wd-font-15px wd-font-line-17px">
                        <span class="fw-bold text-white">${post.name}</span> <span>@${post.userName}&nbsp;•&nbsp;${post.time}</span>
                    </h5>
                    <p class="wd-font-15px wd-font-line-17px">
                        ${(post.postBody || ' ').split("\ ").map((word) => {
                            if (word.startsWith('@')) {
                                return '<a href="#" class="text-decoration-none">' + word + '</a>';
                            } else if (word.match('[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)')) {
                                return '<a href="#" class="text-decoration-none">' + word + '</a>';
                            } else {
                                return word;
                            }
                        }).join("\ ")}
                    </p>
                </div>
            </div>

            <div class="wd-padding-left-80px wd-padding-top-12px wd-max-width-504px wd-padding-right-16px">
                <div class="rounded wd-outline wd-margin-16px-left">
                    <img class="wd-outline ${post.linkDescription ? "rounded-top" : "rounded"} wd-article-image" src=${post.linkImg}/>
                    ${post.linkDescription ? `
                    <div class="wd-padding-12px">
                        <h5 class="wd-font-line-17px">${post.linkTitle}</h5>
                        <p class="wd-fg-dark-gray">${post.linkDescription}</p>
                        <p class="wd-fg-dark-gray"><i class="fa fa-solid fa-link"></i> ${post.linkUrl}</p>
                    </div>
                    ` : ``}
                </div>

                <ul class="wd-margin-16px-left pb-4 mt-2 wd-fg-dark-gray wd-flex-container wd-justify-space-between wd-display-inline wd-width-80percent">
                    <li><i class="fa fa-solid fa-comment"></i> ${post.comments}</li>
                    <li><i class="fa fa-solid fa-retweet"></i> ${post.retweets}</li>
                    <li class="wd-fg-red"><i class="fa fa-regular fa-heart"></i> ${post.likes}</li>
                    <li><i class="fa fa-solid fa-share"></i></li>
                </ul>
            </div>
        </div>
            `);
    }).join('')}
    `);
}
