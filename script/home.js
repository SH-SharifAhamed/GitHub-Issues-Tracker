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

          card.innerHTML = `<div class="card-1 rounded-lg p-4 mb-4 bg-[#F1F5F9] shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
               <div class="flex items-center justify-between">
                    <img src="./assets/Open-Status.png" alt="">
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

// all Issue golok display korar function

function displayIssues(issues) {
     const cards = document.getElementById("cardContainer");
     cards.innerHTML = ""; 
     issues.forEach((issue) => {
          
          const card = document.createElement("div")
          card.className = "rounded-lg px-4 py-2 mb-4 bg-[#F1F5F9] shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300";

          card.innerHTML = `<div class="rounded-lg mb-4">
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

