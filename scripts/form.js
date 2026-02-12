// Product array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Let's populate the select dropdown using the array
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("product");

  products.forEach(item => {
    const opt = document.createElement("option");
    opt.textContent = item.name;   // what to see
    opt.value = item.id;           // what to submit 
    select.appendChild(opt);
  });

const modElement = document.getElementById("lastModified");
if (modElement) {
  modElement.textContent = document.lastModified;
}  

});