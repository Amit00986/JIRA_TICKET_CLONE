let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textareaCont = document.querySelector(".textarea-cont");

let addFlag = false;


addBtn.addEventListener("click", (e) => {
    // display modal
    // Generate ticket

    // AddFlag, true -> modal Display
    // AddFlag, False -> Modal name

    addFlag = !addFlag;
    if(addFlag){
        modalCont.style.display = "flex";
    }
    else {
        modalCont.style.display = "none";
    }

})

modalCont.addEventListener("keydown", (e) => {
    let key = e.key;
    if(key === "Shift")
    {
        createTicket();
        modalCont.style.display = "none";
        addFlag = false;
        textareaCont.value="";
    }


})

 function createTicket() {
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
     <div class="ticket-color"></div>
     <div class="ticket-id">#sample_id</div>
     <div class="task-area">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
           Maiores expedita aspernatur assumenda velit, eum dolorum.
         </div>
         
    `;
    mainCont.appendChild(ticketCont);

}

