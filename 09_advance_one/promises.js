const promise1 = new Promise(function(reslove,reject){
    // Fo an async task
    // Db class, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        reslove()
    },1000)
})

promise1.then(function(){
    console.log("promise consumed");
})

new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log("Async task 2");
        reslove()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promise3 = new Promise(function(reslove,reject){
    setTimeout(function(){
        reslove({username: "divya",email: "divya@example.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promise4
.then( (user) => {
    console.log(user);
    return user.username
})
.then( (username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The promise is either resolved or reject");
})



const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascricpt",password:"123"})
        }
        else{
            reject('ERROR: Js went wrong')
        }
    },1000)
})

async function consumePromise5(){
    try{
        const response = await promise5
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromise5()