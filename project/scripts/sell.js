//  Mobile Navigation Toggle ------
const menuBtn = document.getElementById("menu");
const nav = document.querySelector(".nav");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Footer Year --------
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

//  Dynamic Product Data -------
const products = [
  {
    name: "Solar Lantern",
    price: 2200,
    discount: 10,
    stock: true,
    location: "Kainuk",
    seller: "Peter Kiptanui",
    image: "https://media.istockphoto.com/id/1030178458/photo/solar-cell-lantern.jpg?s=1024x1024&w=is&k=20&c=g6iABUWtpdr8UuzyBj9cLQ8XC6CIdCCLummcVwktWTA="
  },
  {
    name: "Charcoal Stove",
    price: 1300,
    discount: 5,
    stock: true,
    location: "Lokichar",
    seller: "John Lemayian",
    image: "https://images.unsplash.com/photo-1715173677249-9fd0e2a1a08c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    name: "Turkana Afrikan Trivet",
    price: 2500,
    discount: 10,
    stock: true,
    location: "Lodwar",
    seller: "Turkana Women Group",
    image: "https://basketsandbeadskenya.com/cdn/shop/products/ResizedPinkTrivet.jpg?v=1611120483"
  },
  {
    name: "Table Runner Set",
    price: 13800,
    discount: 20,
    stock: true,
    location: "Kakuma",
    seller: "Rose Tabo",
    image: "https://basketsandbeadskenya.com/cdn/shop/products/image_b42b1f9c-fcbf-41c3-9ab2-95471598b628.jpg?v=1648040270&width=533"
  },
  {
    name: "Afrikan Print Apron",
    price: 4600,
    discount: 30,
    stock: true,
    location: "Kakuma Refugee Camp",
    seller: "Kizimana Women Group",
    image: "https://basketsandbeadskenya.com/cdn/shop/files/image_15d64a6d-abc8-458e-9ef0-0e672dba254e.jpg?v=1687374620&width=533"
  }
];

// View Mode saved in localStorage ----------
let viewMode = localStorage.getItem("viewMode") || "grid";

function applyViewMode() {
  const grid = document.getElementById("productGrid");
  grid.className = viewMode === "list" ? "product-list" : "product-grid";
}

document.getElementById("gridView")?.addEventListener("click", () => {
  viewMode = "grid";
  localStorage.setItem("viewMode", "grid");
  applyViewMode();
});

document.getElementById("listView")?.addEventListener("click", () => {
  viewMode = "list";
  localStorage.setItem("viewMode", "list");
  applyViewMode();
});

document.getElementById("searchBtn")?.addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.seller.toLowerCase().includes(query) ||
    p.location.toLowerCase().includes(query)
  );

  document.getElementById("productGrid").innerHTML =
    filtered.map(productCardTemplate).join("");
});

//  Product Template Literal ---------
function productCardTemplate(p) {
  return `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="product-details">
        <h3>${p.name}</h3>
        <p class="price">KES ${p.price}</p>
        ${p.discount > 0 ? `<p class="discount">${p.discount}% Off</p>` : ""}
        <p class="seller">Seller: ${p.seller}</p>
        <p class="location">${p.location}</p>
        <p class="stock ${p.stock ? "in-stock" : "out-stock"}">
          ${p.stock ? "In Stock" : "Out"}
        </p>
      </div>
    </div>
  `;
}

// Render Products ---------
function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = products.map(productCardTemplate).join("");
}

renderProducts();
applyViewMode();