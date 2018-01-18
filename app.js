
document.getElementById('button1').addEventListener('click',getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click',getApi);

// ************** Get Local text file ************
function getText(e){
  fetch('test.txt')
  .then((res)=>{
    return res.text();
  })
  .then((data)=>{
    document.getElementById('output').innerHTML = data;
  })
  .catch((err)=>{
  });
}

// ************** Get Local JSON file ************
function getJson(){
  fetch('posts.json')
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    let postOutput ='';
    data.forEach((post)=>{
      postOutput = postOutput + `
      <li>${post.title} : ${post.body}</li>`
    });
    document.getElementById('output').innerHTML = postOutput;
  })
}
// ************** Get API Data ************

function getApi(){
  fetch('https://api.github.com/users')
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    let userOutput ='';
    data.forEach((user)=>{
      userOutput = userOutput + `
      <li>${user.login}</li>`
    });
    document.getElementById('output').innerHTML = userOutput;
  })


}