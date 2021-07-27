let posts = [
    {title:'Post 1',body : " Bella Ciao " },
    {title:'Post 2',body : " Oh Partigano "},
    {title:'Post 3',body : " Trivado Invasor "}
]

const getPost = () =>{
    setTimeout(()=>{
        let output = '';
        posts.forEach( p  => {
        output+= `<li>${p.title}</li>${p.body}`;   
        });
        document.body.innerHTML = output;
    },1000);
}

const createPost = (post,callback) =>{
    setTimeout(()=>{
        posts.push(post)
        callback();
    },1000)
}

//getPost();
createPost({title:'Post 4',body:'Una Matina'},getPost);


// test code 
