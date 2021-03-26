var pageCounter = 1;
// page counter isn't necessary for any other page
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'https://raw.githubusercontent.com/isakabusee/mydata/main/main.js');
ourRequest.open('Get', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest , 400) {
        var ourData = JSON.parse(ourRequest.responseText);
        // console.log(ourData[1]);
        renderHTML(ourData);
    } else {
        console.log("I cannot connect to the server because it returned and error")
    }
};
ourRequest.onerror = function() {
    console.log("Connection error");
};
ourRequest.send();
pageCounter++;
if (pageCounter > 3) {
    btn.classList.add("hide me");
}
});

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i< data.length; i++){
        htmlString += "<p>" + data[i].name + "  is a " + data[i].species + "that likes to eat  ";

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += "  and  " + data[i].foods.likes[ii];
            }
        }
        htmlString += ' and dislikes ';

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += "  and  " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += '.</p>'
    }


    animalContainer.insertAdjacentHTML('beforeend',htmlString)

}
// every data is different. 

