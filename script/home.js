let allIssues = [];


const cardContainer = document.getElementById("cardContainer");
const loadingSpinner = document.getElementById("loadingSpinner");


// button filtering 
const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closedBtn = document.getElementById("closedBtn");

const buttons = [allBtn, openBtn, closedBtn];


// button filtering
function setActive(activeBtn) {

     buttons.forEach(btn => {
          btn.classList.remove("bg-[#4A00FF]", "text-white");
          btn.classList.add("bg-gray-200", "text-[#64748B]");
     });

     activeBtn.classList.remove("bg-gray-200", "text-[#64748B]");
     activeBtn.classList.add("bg-[#4A00FF]", "text-white");
}

allBtn.addEventListener("click", () => setActive(allBtn));
openBtn.addEventListener("click", () => setActive(openBtn));
closedBtn.addEventListener("click", () => setActive(closedBtn));



// loading spinner functions
function showLoading() {
     // loading - spinner
     loadingSpinner.classList.remove("hidden");
     cardContainer.innerHTML = "";
}
function hideLoading() {
     loadingSpinner.classList.add("hidden");
}

// all cards container
async function loadIssues() { 
     showLoading();
     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
     const data = await res.json();
     hideLoading();
     displayIssues(data.data);
}
 
// all cards display function
function displayIssues(issues) {
     // console.log(issues);
     const cards = document.getElementById("cardContainer");
     
     
     cards.innerHTML = ""; // Clear existing content
     issues.forEach((issue) => {
          // console.log(issue);

          const card = document.createElement("div")
          card.className = "card-1 rounded-lg p-4 mb-4 bg-[#F1F5F9] shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300";

          card.innerHTML = `<div  class="card-1 rounded-lg p-4 mb-4 bg-[#F1F5F9] shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
               <div class="flex items-center justify-between">
                    <img  src="./assets/Open-Status.png" alt="">
                         <div class="badge badge-soft badge-error">${issue.priority}</div>
               </div>
               <div>
                    <h3 class="font-bold">${issue.title}</h3>
                    <p class="text-[#64748B]">${issue.description}</p>
               </div>
               <div class="flex items-center gap-4">
                    <div class="badge badge-soft badge-error">${issue.labels.join(",")}</div>
                    <div class="badge badge-soft badge-warning">${issue.status}</div>
               </div>
               <hr>
                    <div>
                         <p class="text-[#64748B]">#${issue.id} by ${issue.author}</p>
                         <p class="text-[#64748B]">${issue.createdAt}</p>
                    </div>
          </div>`;

          cards.appendChild(card);

     });
     
}
loadIssues();

// allIssues get api
async function loadIssues() {
     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
     const data = await res.json();
    
     allIssues = data.data;

     displayIssues(allIssues);
     updateCount(allIssues);
}
loadIssues();


// data count function
function updateCount(issues) {
     const issuesCount = document.getElementById("issueCount");
     issuesCount.innerText = `${issues.length} Issues`;
}


// load single word details
const loadWordDetail = async(id) => {
     const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
     
     const res = await fetch(url);
     const details = await res.json();
     displayWordDetails(details.data);
}

const displayWordDetails = (word) => { 
     console.log(word);
     const detailsBox = document.getElementById("details-container");
     detailsBox.innerHTML = ` <h2 class="font-bold">${word.title}</h2>
                         <div class="flex items-center gap-4 mt-4">
                              <div class="badge badge-accent">${word.labels.join(", ")}</div>
                              <div class="text-[#64748B] flex items-center gap-2">
                                   <p>${word.author}</p>
                                   <p>${word.createdAt}</p>
                              </div>
                         </div>
                         <div class="flex items-center gap-4 mt-4 mb-4">
                              <div class="badge badge-outline badge-warning">${word.labels.join(", ")}</div>
                              <div class="badge badge-outline badge-error">${word.status}</div>
                         </div>
                         <p class="text-[#64748B] mb-4">${word.description}</p>
                         <div class="flex justify-around items-center gap-10 mt-4">
                              <div>
                                   <p>Assignee:</p>
                                   <p>${word.assignee || "Unassigned"}</p>
                              </div>
                              <div>
                                   <p>Priority:</p>
                                   <div class="badge badge-error">${word.priority}</div>
                              </div>
                         </div>`;
     document.getElementById("word_modal").showModal();
}




// all Issue golok display korar function
function displayIssues(issues) {
     const cards = document.getElementById("cardContainer");
     cards.innerHTML = ""; 
     issues.forEach((issue) => {
          
          const card = document.createElement("div")
          let borderColor = "";
          if (issue.status === "open") {
               borderColor = "border-t-4 border-green-500";
          }
          else if (issue.status === "closed") { 
               borderColor = "border-t-4 border-purple-500";
          }
          card.className = `rounded-lg px-4 py-2 mb-4 bg-[#F1F5F9] shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 ${borderColor}`;

          card.innerHTML = `<div onclick="loadWordDetail(${issue.id})" class="rounded-lg mb-4">
               <div class="flex items-center justify-between">
                    <img src="./assets/Open-Status.png" alt="">
                         <div class="badge badge-soft badge-error">${issue.priority}</div>
               </div>
               <div>
                    <h3 class="font-bold">${issue.title}</h3>
                    <p class="text-[#64748B]">${issue.description}</p>
               </div>
               <div class="flex items-center gap-4">
                    <div class="badge badge-soft badge-error">${issue.labels.join(",")}</div><br><br>
                    <div class="badge badge-soft badge-warning">${issue.status}</div>
               </div>
               <hr>
                    <div>
                         <p class="text-[#64748B]">#${issue.id} by ${issue.author}</p>
                         <p class="text-[#64748B]">${issue.createdAt}</p>
                    </div>
          </div>`;

          cards.appendChild(card);
     });
     updateCount(issues);
}

// button filter function
function showAll() {
     displayIssues(allIssues);
}

function showOpen() {
     const openIssues = allIssues.filter(issue => issue.status === "open");
     displayIssues(openIssues);
}

function showClosed() { 
     const closedIssues = allIssues.filter(issue => issue.status === "closed");
     displayIssues(closedIssues);
}


document.getElementById("btn-search").addEventListener("click", () => {
     const input = document.getElementById("search-input");
     const searchValue = input.value.trim().toLowerCase();
     
     fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
     .then((res) => res.json())
     .then((data) => {
          const allWords = data.data;
          const filteredWords = allWords.filter(word => word.title.toLowerCase().includes(searchValue));
          displayIssues(filteredWords);
     });

});

issue.status.toLowerCase() === 'open'
     ? 'border-green-500'
     : 'border-purple-500'