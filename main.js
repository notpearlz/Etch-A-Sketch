let container = document.querySelector(".container");

function createGrid(size){
    //Column
    for(let i = 0; i < size; i++){
        const col = document.createElement("div");
        col.classList.toggle("col")

        //Row
        for(let j = 0; j < size; j++){

            let interactions = 0;
            const div = document.createElement("div");
            div.classList.toggle("square");

            //square.style.padding
            col.append(div);
    
            //Hover effect to change color
            div.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = randomColor();

                div.style.opacity = "100%";
                interactions+=10;
            });
    
            div.addEventListener("mouseout", (event) => {
                event.target.style.backgroundColor = "black";
                div.style.opacity = (interactions.toString() + "%");
            });

        }

        container.append(col);
    }
}

btn = document.querySelector("button");

btn.addEventListener("click",() => {
    userInput = prompt("Number of squares per side for a new grid:")
    
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    createGrid(userInput);
});



function randomColor(){
    const colors = "0123456789ABCDEF";

    color = "";
    for(let j = 0; j < 6; j++){
        color += (colors[Math.floor(Math.random()*16)]);
    }
    return ("#" + color);

    

}







createGrid(4);
