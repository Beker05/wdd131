document.addEventListener("DOMContentLoaded", function () {
    const temples = [
        {
            name: "Bern Switzerland",
            location: "Bern, Switzerland",
            dedicated: "September 11, 1955",
            area: 35546,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg",
            alt: "Bern Switzerland Temple"
        },
        {
            name: "Bismarck North Dakota",
            location: "Bismarck, North Dakota",
            dedicated: "September 19, 1999",
            area: 10700,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bismarck-north-dakota-temple/bismarck-north-dakota-temple-8801.jpg",
            alt: "Bismarck North Dakota Temple"
        },
        {
            name: "Bountiful Utah",
            location: "Bountiful, Utah",
            dedicated: "January 8, 1995",
            area: 104000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-1049.jpg",
            alt: "Bountiful Utah Temple"
        },
        {
            name: "Campinas Brazil",
            location: "Campinas, Brazil",
            dedicated: "May 17, 2002",
            area: 48100,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-5206.jpg",
            alt: "Campinas Brazil Temple"
        },
        {
            name: "Cochabamba Bolivia",
            location: "Cochabamba, Bolivia",
            dedicated: "April 30, 2000",
            area: 35502,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13721-main.jpg",
            alt: "Cochabamba Bolivia Temple"
        },
        {
            name: "Deseret Peak Utah",
            location: "Deseret Peak, Utah",
            dedicated: "November 10, 2024",
            area: 71998,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/deseret-peak-utah-temple/deseret-peak-utah-temple-54400-main.jpg",
            alt: "Deseret Peak Utah Temple"
        },
        {
            name: "Guayaquil Ecuador",
            location: "Guayaquil, Ecuador",
            dedicated: "August 1, 1999",
            area: 45000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/058-Guayaquil-Ecuador-Temple.jpg",
            alt: "Guayaquil Ecuador Temple"
        },
        {
            name: "Lubbock Texas",
            location: "Lubbock, Texas",
            dedicated: "April 21, 2002",
            area: 16498,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lubbock-texas-temple/lubbock-texas-temple-13996-main.jpg",
            alt: "Lubbock Texas Temple"
        },
        {
            name: "Trujillo Peru",
            location: "Trujillo, Peru",
            dedicated: "June 21, 2015",
            area: 28200,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/trujillo-peru-temple/trujillo-peru-temple-3712.jpg",
            alt: "Trujillo Peru Temple"
        }
    ];

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const templesContainer = document.getElementById("temples-container");

    function displayTemples(filteredTemples) {
        templesContainer.innerHTML = ""; 

        filteredTemples.forEach(temple => {
            const card = document.createElement("div");
            card.classList.add("temple-card");

            card.innerHTML = `
                <h2>${temple.name}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq. ft.</p>
                <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy">
            `;

            templesContainer.appendChild(card);
        });
    }

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        menuToggle.textContent = navLinks.classList.contains("active") ? "✖" : "≡";
    });

    document.querySelectorAll(".navigation li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            let filter = this.id;
            let filteredTemples = [];

            if (filter === "old") {
                filteredTemples = temples.filter(t => parseInt(t.dedicated.split(" ")[2]) < 2000);
            } else if (filter === "new") {
                filteredTemples = temples.filter(t => parseInt(t.dedicated.split(" ")[2]) >= 2000);
            } else if (filter === "large") {
                filteredTemples = temples.filter(t => t.area > 40000);
            } else if (filter === "small") {
                filteredTemples = temples.filter(t => t.area < 40000);
            } else {
                filteredTemples = temples;
            }

            displayTemples(filteredTemples);

            if (window.innerWidth <= 768) {
                navLinks.classList.remove("active");
                menuToggle.textContent = "≡";
            }
        });
    });

    displayTemples(temples);

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("modifiedDate").textContent = document.lastModified;
});
