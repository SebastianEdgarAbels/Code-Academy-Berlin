// console.log('data :>> ', data);
// console.log('data :>> ', data[0].genre);


fetch("https://cab-cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games").then((response) => {
    // console.log('response :>> ', response);
    return response.json();
})
.then((result) => {
        // console.log('result :>> ', result);
        let myData = result;
        console.log('data :>> ', myData);
        createCard(myData);
        createOptionsVal(myData);
        setFilterEventListeners(myData);        
    })
.catch((error) => console.log(error));



function createCard(data) {

    let container = document.getElementById("cards-container")
    container.innerHTML = "";
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
    getEvents(data)
}


function getEvents(data) {
    var buttons = document.querySelectorAll(".myBtn")
    buttons.forEach((button)=> {
        button.addEventListener("click", function(e){
            // console.log("this is button", button.id);
            console.log('e.target.id :>> ', e.target.id);
            showModal(data, e.target.id)
        })
    })
}
   

function showModal(data,buttonId) {
    // console.log('id number :>> ', buttonId);
    // console.log('data :>> ', data);
    
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

// toggleCards();

// populating the dropdown with values from the array
function createOptionsVal(datas) {
    // select the element 
    let selectVal = document.getElementById("idSelectGenre");
    // make a foreach for accesing the property
    
    // map over the array and extract each and every element respetively, the property that I'm looking for => genre
    let genres = datas.map((data) => {
        return data.genre;
    });

    // eliminating the duplicates and sorting the values
    const uniqueGenres = [...new Set(genres)].sort();
    // console.log('uniqueGenre :>> ', uniqueGenres);
    
    uniqueGenres.forEach((genre) => {
        // console.log('uniqueGenre :>> ', uniqueGenre);
        // create the element options
        let optionsGenerate = document.createElement("option");
        // write the genre into HTML
        optionsGenerate.innerHTML = genre;
        optionsGenerate.value = genre;
        // append the option to the parent
        selectVal.appendChild(optionsGenerate); 
    })
}

// Add event listeners for the dropdown & checkboxes

function setFilterEventListeners(data) {
    document.querySelector("#idSelectGenre").addEventListener("change", (e) => {
        // console.log('event :>> ', e.target.value);
        if(e.target.value !== "Genre") {
            filterDropDown(data);
        } else {
            createCard(data);
        } 
    });
    // document.querySelector(".pcCheckbox").addEventListener("change", (e) => {
    //     console.log('e :>> ', e);
    // });
    // document.querySelector(".webCheckbox").addEventListener("change", (e) => {
    //     console.log('e :>> ', e);
    // });
    /////////// instead of doing this logic from above, I select all by their input and loop them ///////////
    const checkBoxes = document.querySelectorAll("input[type= 'checkbox']");
    // console.log(' checked :>> ',  checkBoxes);
    checkBoxes.forEach((checkbox) => {
        checkbox.addEventListener("click", (e) => {
            console.log('checked :>> ', e.target.value);
            if(e.target.checked === true) {
                switch (e.target.value) {
                    case "PC (Windows)":
                        filterCheckBoxes(data);
                        break;
                    case "Web Browser":
                        filterCheckBoxes(data);
                        break;
                    case "PC (Windows), Web Browser":
                        filterCheckBoxes(data);
                        break;
                } 
                // filterCheckBoxes(data);
            } else {
                createCard(data);
            }
        })
        
    })
    document.querySelector("#SubmitBut").addEventListener("click", (e) => {
        // console.log('e :>> ', e);
    });
}


  

// Filter for Genre - Dropdown - 
const filterDropDown = (data) => {
    // console.log('data :>> ', data);
    const dropDownValue = document.querySelector("#idSelectGenre").value;
    // console.log('dropDownValue :>> ', dropDownValue);
    // filter over the array of data .
   
    let filteredGenre = data.filter((dataGenre) => { 
        return dataGenre.genre === dropDownValue; 
    })
    console.log('filteredGenre :>> ', filteredGenre);
    // call the function createCard to populate with filtered elements
    createCard(filteredGenre);
};

const filterCheckBoxes = (data) => {
    // target all checkBoxes
    // const checkBoxes = document.querySelectorAll("input[type= 'checkbox']");
    // // create array with the values of the checked checkboxes
    // let checkedCheckboxes = [];
    // const checkBoxValue = checkBoxes.forEach((checkBox) => {
    //     // console.log('checkBox :>> ', checkBox);
    //     if(checkBox.checked === true) {
    //         checkedCheckboxes.push(checkBox.value);
    //         console.log('checkedCheckboxes :>> ', checkedCheckboxes);
    //     }
    // })
    const checkBoxes = document.querySelectorAll("input[type= 'checkbox']:checked");
    // checkBox is nodeList and not an array. An node list behave almost like an Array but I can't map over it. I can do a foreach, a for loop but not map over it
    const valuesArray = Array.from(checkBoxes).map((checkBox) => {
        console.log('checkBox.value :>> ', checkBox.value);
        return checkBox.value;
    })

    const valuesCheckedBoxes = data.filter((filteredCheckedBox) => {
        // const filteredVal = filteredCheckedBox.platform
       return (valuesArray.includes(filteredCheckedBox.platform));
    })
    createCard(valuesCheckedBoxes);
}




