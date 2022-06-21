let postRow= document.querySelector('#post-header');
let postForm = document.querySelector('#form');
let title = document.querySelector('#title');
let body = document.querySelector('#body');
let postBox = [];


function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            postBox = data;
            getPosts();
                console.log(postBox);
                // postBox = data
                let postHeader = '';
                postBox.forEach(post => {
                        postHeader += `
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card border-0 h-100" style="width: 18rem;">
                                    <img src="img/spaghetti.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${post.title}</h5>
                                    <p class="card-text" id="post-body">${post.body}</p>
                                    <div class="d-flex justify-content-between">
                                    <a href="view.html" class="btn btn-primary">View</a>
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


 postForm.addEventListener('submit', createPost)


 function createPost(e) {
     e.preventDefault();
     fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
             title: title.value,
             body: body.value,
             userId: 2
         }),
         headers: {
             'Content-type': 'application/json'
         }
     })
     .then((response) => response.json())
     .then((data)=> {
         postBox.unshift(data);
         console.log(postBox)
         let postHeader = '';
         postBox.forEach(post => {
             postHeader += `
                <div class="col-lg-4 col-md-6">
                    <div class="card border-0 h-100" style="width: 18rem;">
                        <img src="img/spaghetti.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                        <p class="card-text" id="post-body">${post.body}</p>
                        <div class="d-flex justify-content-between">
                        <a href="view.html" class="btn btn-primary">View</a>
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
