console.log('data :>> ', data);
console.log('data :>> ', data[0].genre);





function createCard() {

    let container = document.getElementById("cards-container")
    for (let i = 0; i < data.length; i++) {
        let divCard = document.createElement("div");
        // let dataShortDescription = data[i].short_description;

        // divCard.setAttribute("class", "card")
        divCard.classList.add("card", "col-sm-3");
        divCard.setAttribute("style", "width: 18rem;");

        // Creating the img element
        let img = document.createElement("img");
        img.setAttribute("src", data[i].thumbnail)
        img.setAttribute("alt", data[i].title);
        img.classList.add("card-img-top");


        // creating the Car-body
        let divCardBody = document.createElement("div");
        divCardBody.classList.add("card-body");
        divCardBody.setAttribute("style", "height: 180px !important;");
        
        //Creating the h5 tag
        let h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerText = data[i].title; 
                

        let pCard = document.createElement("p");
        pCard.classList.add("card-text");
        
        
         
        const myArray = data[i].short_description.split(" ");
        if(myArray.length > 11) {
            let newVar = data[i].short_description.split(" ")
            .slice(0, 10)
            .join(" ")
            ; 
            
            // Creating the button for showing the whole text
            let buttonCardText = document.createElement("button");
            buttonCardText.setAttribute("class", "myBtn");
            buttonCardText.setAttribute("id", i);

            buttonCardText.innerHTML = "...";
            
            // Creating the span inside ModalContant
            let spanModal = document.createElement("span");
            spanModal.classList.add("close");
            spanModal.innerHTML = "&times;"

            pCard.innerHTML = newVar;
            pCard.appendChild(buttonCardText);
    
        } else {
            data[i].short_description.split(" ")
            .slice(0, 10)
            .join(" ")
            ;
            pCard.innerHTML = data[i].short_description; 
        }
        


        let ulGroup = document.createElement("ul");
        ulGroup.classList.add("list-group", "list-group-flush");
        
        let liGroup = document.createElement("li");
        liGroup.classList.add("list-group-item");
        liGroup.innerHTML = data[i].genre + "<br>" /*+ data[i].developer + "<br>"*/ + data[i].platform + "<br>" + "release date: " + data[i].release_date;
        

        let divCardBody1 = document.createElement("div");
        divCardBody1.classList.add("card-body");

        let a1 = document.createElement("a");
        a1.classList.add("btn", "btn-primary");
        a1.setAttribute("href", data[i].game_url);
        a1.innerText = "Free";

        let a2 = document.createElement("a");
        a2.classList.add("btn", "btn-primary");
        a2.setAttribute("href", data[i].freetogame_profile_url);
        a2.innerText = "Free2Game website";


        // Appending each tag 
        container.appendChild(divCard);
        divCard.appendChild(img);
        divCard.appendChild(divCardBody);
        divCardBody.appendChild(h5);
        divCardBody.appendChild(pCard);
        divCard.appendChild(ulGroup);
        ulGroup.appendChild(liGroup);
        divCard.appendChild(divCardBody1);
        divCardBody1.appendChild(a1);
        divCardBody1.appendChild(a2);
        
        
    } 
    getEvents()
}
createCard();


        function getEvents() {
            // var modal = document.getElementById("myModal");

            var buttons = document.querySelectorAll(".myBtn")
            // const buttonId = document.querySelector(".myBtn").id
                    // console.log('buttonId :>> ', buttonId);

                    // const modalButton = document.getElementById(`${buttonId}`)
                    // console.log('modalButton :>> ', modalButton);

                   
            // console.log('buttons :>> ', buttons);
            buttons.forEach((button)=> {
                button.addEventListener("click", function(e){
                    // console.log("this is button", button.id);
                    console.log('e.target.id :>> ', e.target.id);
                    showModal( e.target.id)
                })
            })

            
        }
   

        function showModal(buttonId) {
            // console.log('id number :>> ', buttonId);
            
            let modalContainer = document.getElementById("modalContainer")
            // const buttonId = document.querySelector(".myBtn").id
            console.log('buttonId :>> ', buttonId);
            // Creating the div for the modal
            let divModal = document.createElement("div");
            divModal.setAttribute("id", "myModal");
            divModal.classList.add("modal");
            divModal.style.display = "block";

            // Creating the ModalContent
            let divModalContent = document.createElement("div");
            divModalContent.classList.add("modal-content");

            // Creating the span inside ModalContant
            let spanModal = document.createElement("span");
            spanModal.classList.add("close");
            spanModal.innerHTML = "&times;"

            // Creating the p tag where to put the content that will be showned
            let pModalContent = document.createElement("p");
            

            pModalContent.innerHTML = data[buttonId].short_description + "<br>" + "<br>" + data[buttonId].developer + "<br>" +data[buttonId].publisher;
            // console.log('pModalContent.innerHTML :>> ', pModalContent.innerHTML);

        
              // When the user clicks on <span> (x), close the modal
              spanModal.onclick = function() {
                  divModal.style.display = "none";
              }

              // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == divModal) {
                    divModal.style.display = "none";
                }
            }
        // console.log('divModal :>> ', divModal);
        modalContainer.appendChild(divModal);
            divModal.appendChild(divModalContent);
            divModalContent.appendChild(spanModal);
            divModalContent.appendChild(pModalContent);
    }