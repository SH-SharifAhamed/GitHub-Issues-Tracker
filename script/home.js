console.log("hellow world");


const cardContainer = document.getElementById("cardContainer");
const loadingSpinner = document.getElementById("loadingSpinner");


async function loadIssues() { 

     loadingSpinner.classList.remove("hidden");
     loadingSpinner.classList.add("flex");



     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
     const data = await res.json();

     loadingSpinner.classList.add("hidden");
     
     displayIssues(data.data);
}
 
function displayIssues(issues) {
     console.log(issues);
     cards.forEach(issues => {
          console.log(issues);

          const card = document.createElement("div")
          card.className = "card-1 rounded-lg p-4 mb-4 bg-[#F1F5F9] shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300";

          card.innerHTML = `<div class="card-1 rounded-lg p-4 mb-4 bg-[#F1F5F9] shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
               <div class="flex items-center justify-between">
                    <img src="${issues.image}" alt="">
                         <div class="badge badge-soft badge-error">${issues.priority}</div>
               </div>
               <div>
                    <h3 class="font-bold">${issues.title}</h3>
                    <p class="text-[#64748B]">${issues.description}</p>
               </div>
               <div class="flex items-center gap-4">
                    <div class="badge badge-soft badge-error">${issues.labels}</div>
                    <div class="badge badge-soft badge-warning">${issues.status}</div>
               </div>
               <hr>
                    <div>
                         <p class="text-[#64748B]">#1by john_doe</p>
                         <p class="text-[#64748B]">1/15/2024</p>
                    </div>
          </div>`;

          cardContainer.appendChild(card);

     });
     
}



loadIssues();