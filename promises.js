let posts = [
    {title:'Post 1',body : " Bella Ciao " },
    {title:'Post 2',body : " Oh Partigano "},
    {title:'Post 3',body : " Trivado Invasor "}
]

const showError = () =>{
    alert(" Danger !! ")
}

const getPost = () =>{
    setTimeout(()=>{
        let output = '';
        posts.forEach( p  => {
        output+= `<li>${p.title}</li>${p.body}`;   
        });
        document.body.innerHTML = output;
    },1000);
}

const createPost = (post) =>{

    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            posts.push(post)
            let error = false;
            
           // posts.length = 0;
            
           if(posts.length == 0)
            error = true;
          
           if(error == false){
                resolve();
           }
           else{
                reject();
           }
        },2000);
    }) 
}
/*
    createPost({title:'Post 4',body:'Una Matina'})
    .then(getPost)
    .catch(showError);
*/
// Learn to use Promise.all() -> https://www.youtube.com/watch?v=PoRJizFvM7s (15min-20min)

//====== Using Async / Await =====================

 const init = async () =>{
   await createPost({title:'Post 4',body:'Una Matina'});

   getPost();
}

init();
