let d = document,
    //user start
    btn = d.getElementById("btn"),
    img = d.getElementById("avatar"),
    email = d.getElementById("email"),
    id = d.getElementById("username"),
    name = d.getElementById("fullname"),
    address = d.getElementById("city"),
    //dog start
    getDog = d.getElementById("btn-dog"),
    dogImage = d.getElementById("dog-image"),
    //currency start
    calculate = d.getElementById("btn-currency");
btn.addEventListener("click", function(){
    let url = "https://randomuser.me/api/";
    fetch(url)
        .then(handleErrors)
        .then(function(response){
            console.log("Steady!");
            return response.json(response).then(function (data) {
                let user = data.results[0];
                console.log(user);
                img.src = user.picture.large;
                name.innerHTML = user.name.first.toUpperCase() + " " + user.name.last.toUpperCase();
                id.innerHTML = user.login.username;
                email.innerHTML = user.email;
                address.innerHTML = user.location.city.charAt(0).toUpperCase() + user.location.city.slice(1);;
            })
        })
        .catch(function(error){
            console.log(error);
        });
});
function handleErrors (request){
    if(!request.ok) {
        throw Error(request.status);
    }
    return request;
}

getDog.addEventListener("click", function(){
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
        .then(handleErrors)
        .then(function(response){
            console.log("Steady!");
            return response.json(response).then(function (data) {
                console.log(data);
               dogImage.src = data.message;
            })
        })
        .catch(function(error){
            console.log(error);
        });
});
function handleErrors (request){
    if(!request.ok) {
        throw Error(request.status);
    }
    return request;
}

calculate.addEventListener("click", function(){
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
        .then(handleErrors)
        .then(function(response){
            console.log("Steady!");
            return response.json(response).then(function (data) {
                console.log(data);
                dogImage.src = data.message;
            })
        })
        .catch(function(error){
            console.log(error);
        });
});
function handleErrors (request){
    if(!request.ok) {
        throw Error(request.status);
    }
    return request;
}