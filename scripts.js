var register_form=document.getElementById('register_form')
register_form.addEventListener('submit',function(e){
    e.preventDefault()
    var username= document.getElementById('username').value
    var name= document.getElementById('name').value
    var lastname= document.getElementById('lastname').value
    var pwd= document.getElementById('pwd').value
    fetch("http://172.10.20.1/users",{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            username:username,
            name:name,
            lastname:lastname,
            password:pwd
        })
    
    })
    .then(res =>{
        return res.json()
        })
    .then(data => console.log(data))

})
function login(){
    var username= document.getElementById('username').value
    var pwd= document.getElementById('pwd').value
    fetch("{{apiCassandra}}/login",{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            username:username,
            password:pwd
        })
    })
    .then(res =>{
        return res.json()
        })
    .then(data => console.log(data))
}
function LeaveComent(){

    
}