// console.log("script loaded");

// async function loadIssues(status = "all") {
//      const loader = document.getElementById("loader");
//      const container = document.getElementById("cardContainer");

//      loader.classList.remove("hidden");
//      container.innerHTML = "";

//      const res = await fetch(
//           "https://phi-lab-server.vercel.app/api/v1/lab/issues",
//      );
//      const data = await res.json();

//      let issues = data.data;

//      if (status === "open") {
//           issues = issues.filter((issue) => issue.status === "open");
//      }

//      if (status === "closed") {
//           issues = issues.filter((issue) => issue.status === "closed");
//      }

//      displayIssues(issues);

//      loader.classList.add("hidden");
// }

// function displayIssues(issues) {
//      const container = document.getElementById("cardContainer");

//      issues.forEach((issue) => {
//           const borderColor =
//                issue.status === "open" ? "border-green-500" : "border-purple-500";

//           const card = document.createElement("div");

//           card.className = `
//         border-t-4 ${borderColor}
//         bg-white p-4 rounded shadow
//         `;

//           card.innerHTML = `
//         <h3 class="font-bold">${issue.title}</h3>

//         <p class="text-sm text-gray-500">
//         ${issue.description}
//         </p>

//         <div class="mt-2">
//             <span class="text-xs bg-red-100 px-2 py-1 rounded">
//             ${issue.category}
//             </span>

//             <span class="text-xs bg-yellow-100 px-2 py-1 rounded">
//             ${issue.priority}
//             </span>
//         </div>

//         <p class="text-xs mt-2">
//         #${issue._id} by ${issue.author}
//         </p>

//         <p class="text-xs">
//         ${issue.createdAt}
//         </p>
//         `;

//           container.appendChild(card);
//      });
// }

// loadIssues();

// async function handleSearch() {
//      const text = document.getElementById("searchInput").value;

//      const res = await fetch(
//           `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}`,
//      );
//      const data = await res.json();

//      displayIssues(data.data);
// }

// card.onclick = () => {
//      const modal = document.getElementById("modal");

//      modal.innerHTML = `
//     <h2>${issue.title}</h2>
//     <p>${issue.description}</p>
//     <p>Status: ${issue.status}</p>
//     <p>Author: ${issue.author}</p>
//     `;

//      modal.showModal();
// };

// function setActive(btnId) {
//      document.querySelectorAll("button").forEach((btn) => {
//           btn.classList.remove("bg-purple-600", "text-white");
//      });

//      document.getElementById(btnId).classList.add("bg-purple-600", "text-white");
// }

// loadIssues("open");
// setActive("openBtn");

// function createCard(issue) {
//      const border =
//           issue.status === "open" ? "border-green-500" : "border-purple-500";

//      return `
// <div class="bg-white rounded-lg shadow border-t-4 ${border} p-4">

// <div class="flex justify-between items-center mb-2">

// <span class="text-xs px-2 py-1 rounded-full
// ${issue.priority === "HIGH" ? "bg-red-100 text-red-600" : ""}

// ${issue.priority === "MEDIUM" ? "bg-yellow-100 text-yellow-600" : ""}

// ${issue.priority === "LOW" ? "bg-gray-100 text-gray-600" : ""}">
// ${issue.priority}
// </span>

// </div>

// <h3 class="font-semibold text-sm">
// ${issue.title}
// </h3>

// <p class="text-gray-500 text-xs mt-1">
// ${issue.description}
// </p>

// <div class="flex gap-2 mt-3">

// <span class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
// ${issue.category}
// </span>

// <span class="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">
// HELP WANTED
// </span>

// </div>

// <div class="mt-3 text-xs text-gray-400">

// <p>#${issue._id} by ${issue.author}</p>
// <p>${issue.createdAt}</p>

// </div>

// </div>
// `;
// }

// function displayIssues(issues) {

//      const container = document.getElementById("cardContainer");

//      container.innerHTML = "";

//      issues.forEach(issue => {

//           container.innerHTML += createCard(issue);

//      });

// }

const loadPost = () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPosts(data);
    });
};


const displayPosts = (posts) => {
     const postContainer = document.getElementById("post-container");
     posts.forEach((post) => {
          const title = document.createElement("title");
          title.innerText = post.title;
          console.log(title);
          postContainer.appendChild(title);
     });
};

loadPost();