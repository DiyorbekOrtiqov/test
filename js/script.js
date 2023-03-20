const elPost = document.querySelector(".posts-top");
const elCard = document.querySelector(".cards-top");

  const showPosts =  posts.map((post) => {
      return `
        <div class="card col-8 mx-auto mb-5 p-5">
                        <div class="d-flex gap-2">
                            <img src="https://img.freepik.com/free-vector/cute-panda-writing-book-with-pencil-cartoon-icon-illustration_138676-2607.jpg?t=st=1679321306~exp=1679321906~hmac=7750495c40cc6d37b6834d254f8f3a4ccf0f7686a82473f05abd337ce4ad7e72"
                                width="100px" higth="100px" class="rounded-circle object-fit-none p-2" alt="This picture shows a panda reading a book">
                            <div>
                                <h4 class="lh-1 mt-2">${post.user.name}</h4>
                                <p>@${post.user.username}</p>
                            </div>
    
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                        </div>
                        <div class="accordion border-none">
                            <div class="accordion-item border-none">
                                <h2 class="border-none accordion-header btn btn-primary " id="headingTwo">
                                    <button class="border-none btn btn-primary " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Comments
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <hr/>
                                    <div class="accordion-body">
                                        <p>${post.comments[0].name}</p>
                                        <p>${post.comments[0].email}</p>
                                        <p>${post.comments[0].body}</p>
                                    </div>
                                    <hr/>
                                    <div class="accordion-body">
                                        <p>${post.comments[1].name}</p>
                                        <p>${post.comments[1].email}</p>
                                        <p>${post.comments[1].body}</p>
                                    </div>
                                    <hr/>
                                    <div class="accordion-body">
                                        <p>${post.comments[3].name}</p>
                                        <p>${post.comments[3].email}</p>
                                        <p>${post.comments[3].body}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    
    });
console.log(showPosts);
elPost.innerHTML = showPosts;