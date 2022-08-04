let showContainer = document.getElementById("show-container")

let johnnytest = {
    name: "Johnny Test",
    imgsrc: "images/johnnytest.jpg",
    description: "A show about a boy named Johnny Test, who's best friend is a talking dog. His crazy sisters do lab tests on him, some of which are for their benefit, and some of which are for his benefit. Johnny's arch nemesis is a boy named Bling Bling Boy, who is also in love with Johnny's siter, Susan."
}


let labrats = {
    name: "Lab Rats",
    imgsrc: "images/labrats.jpg",
    description: "Lab rats is a show about children of a rich father who are expiremented upon and have special superpowers."
}

let kickingit = {
    name: "Kickin it",
    imgsrc: "images/kickingit.jpg",
    description: "Kicking it is a show about friends who join a dojo together and experience teenage life together."
}


let spongebob = {
    name : "Spongebob",
    imgsrc: "images/spongebob.png",
    description: "Spongebob is a show about two best friends who go exploring the bikini bottom"
}


let shows = [johnnytest, labrats, kickingit, spongebob];

console.log()


for (const show of shows){

    let newDiv = document.createElement("div");

    let newHeading = document.createElement("h3");
    newHeading.innerHTML = show.name;
    newDiv.appendChild(newHeading);


    let newImg = document.createElement("img");
    newImg.src = show.imgsrc;
    newDiv.appendChild(newImg);

    let newP = document.createElement("p");
    newP.innerHTML = show.description;
    newDiv.appendChild(newP);

    showContainer.appendChild(newDiv);

}