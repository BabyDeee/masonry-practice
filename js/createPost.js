let postBox = [];
let postForm = document.querySelector('#body-form');
let title = document.querySelector('#post-title');
let body = document.querySelector('#textarea-part');
document.getElementById("myButton").onclick = function() {
    location.href = "index.html";
};




postForm.addEventListener('submit', createPost)

function createPost(e){

    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts' , {
        method: 'POST',
        body: JSON.stringify({
            title: 'title.value',
            body: 'body.value',
            userId: 2
        }),
        headers: {
            'Content-type': 'application/json'
          }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let postHeader = '';
                postBox.forEach(post => {
                        postHeader += `
                            <div class="col-lg-4 col-md-6">
                                <div class="card border-0" style="width: 18rem;">
                                    <img src="img/spaghetti.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${post.title}</h5>
                                    <p class="card-text" id="post-body">${post.body}</p>
                                    <div class="d-flex justify-content-between">
                                    <a href="#" class="btn btn-primary">View</a>
                                        <a href="#" class="btn btn-secondary">Update</a>
                                        <a href="#" class="btn btn-danger">Delete</a>
                                    </div>
                                    </div>
                                </div>
                            </div> 
                        `
                    });

            postRow.innerHTML = postHeader;
            })


}


 getPosts();

