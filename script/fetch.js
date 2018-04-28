let btn = document.getElementById("btn");
let img = document.getElementById("avatar");
btn.addEventListener("click", function(){
    let url = "https://randomuser.me/api/";
    fetch(url)
        .then(handleErrors)
        .then(function(response){
            console.log("Steady!");
            console.log(response);
            return response.json(response).then(function (data) {
                console.log(data);

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