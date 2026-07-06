console.log("Script is working!");
const button = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");

function search() {

    const query = searchBox.value;

    window.location.href =
        "results.html?search=" + encodeURIComponent(query);

}

button.addEventListener("click", search);

searchBox.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        search();
    }
    

});
