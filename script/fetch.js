let d = document;
let btn = d.getElementById("btn");
let img = d.getElementById("avatar");
let email = d.getElementById("email");
let id = d.getElementById("username");
let name = d.getElementById("fullname");
let address = d.getElementById("city");
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