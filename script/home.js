
const searchInput = document.querySelector('input[placeholder="Search"]');

async function loadCard(searchText) {
     const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`);
     const data = await res.json();
     console.log(data);
     // const cardContainer = document.getElementById("card-container");
     console.log(searchInput);
     searchInput.innerHTML = "Ekhane button gula asbe";
     data.categories.forEach(element => {
          console.log(element);
     });

}
loadCard();