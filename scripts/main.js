document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    if (!menuBtn || !menu) {
    console.log("No se encontró menuBtn o menu");
    return;
    }

    menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    });
});

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter =
entry.target;

const target =
+counter.dataset.target;

let current = 0;

const updateCounter = () => {

const increment =
target / 100;

current += increment;

if(current < target){

counter.textContent =
Math.ceil(current);

requestAnimationFrame(
updateCounter
);

}else{

counter.textContent =
target + "+";

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter => {
counterObserver.observe(counter);
});



const hiddenElements =
document.querySelectorAll(".hidden-element");

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show-element");
        }

    });

},{
    threshold: .2
});

hiddenElements.forEach(element => {
    observer.observe(element);
});

const processData = [
{
    step: "STEP 01",
    title: "Consultation",
    icon: "ri-chat-3-line",
    image: "images/process-consultation.jpg",
    description:
        "We meet with our clients to understand project goals, requirements, and budget expectations."
},
{
    step: "STEP 02",
    title: "Design & Planning",
    icon: "ri-pencil-ruler-2-line",
    image: "images/process-design.jpg",
    description:
        "Our engineering team creates detailed plans and structural specifications."
},
{
    step: "STEP 03",
    title: "Fabrication",
    icon: "ri-hammer-line",
    image: "images/process-fabrication.jpg",
    description:
        "We manufacture each component using high-quality materials and precise workmanship."
},
{
    step: "STEP 04",
    title: "Installation",
    icon: "ri-building-2-line",
    image: "images/process-installation.jpg",
    description:
        "Our team safely installs and completes the structure according to industry standards."
}
];

const steps = document.querySelectorAll(".step");

const title = document.getElementById("processTitle");
const description = document.getElementById("processDescription");
const image = document.getElementById("processImage");
const icon = document.getElementById("processIcon");
const stepNumber = document.getElementById("stepNumber");
const progress = document.getElementById("timelineProgress");
const timeline = document.querySelector(".timeline");

function updateProcess(index) {

    const data = processData[index];

    title.textContent = data.title;
    description.textContent = data.description;
    image.src = data.image;
    image.alt = data.title;
    stepNumber.textContent = data.step;

    icon.innerHTML = `
        <i class="${data.icon}"></i>
    `;

    steps.forEach(step => {
        step.classList.remove("active");
    });

    steps[index].classList.add("active");

    const circle = steps[index].querySelector("span");

    const circleRect = circle.getBoundingClientRect();
    const timelineRect = timeline.getBoundingClientRect();

    const width =
        (circleRect.left - timelineRect.left) +
        (circleRect.width / 2);

    progress.style.width = `${width}px`;
}

steps.forEach((step, index) => {

    step.addEventListener("click", () => {
        updateProcess(index);
    });

});


window.addEventListener("load", () => {
    updateProcess(0);
});

window.addEventListener("resize", () => {

    const activeIndex =
        [...steps].findIndex(step =>
            step.classList.contains("active")
        );

    updateProcess(activeIndex);

});

document.addEventListener("DOMContentLoaded", () => {

    const heroElements = document.querySelectorAll(
        ".hero-badge, .about-hero h1, .about-hero p, .hero-buttons, .hero-stats"
    );

    heroElements.forEach((element, index) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(40px)";

        setTimeout(() => {
            element.style.transition = "all .8s ease";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, index * 200);
    });

    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });

    const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if(count < target){

                    count += increment;
                    counter.textContent = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.textContent = target + "+";

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{threshold:.5});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

});

document.addEventListener("DOMContentLoaded", () => {
    const projectsHeader = document.querySelector(".projects-header");

    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            projectsHeader.classList.add("show");
        }
        },
        { threshold: 0.3 }
    );

    projectsHeader.classList.add("hidden");
    observer.observe(projectsHeader);
    });

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-item");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        projects.forEach(project => {
        const category = project.dataset.category;

        if (filter === "all" || filter === category) {
            project.style.display = "block";
            project.style.animation = "fadeIn 0.4s ease";
        } else {
            project.style.display = "none";
        }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".project-filters button");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.dataset.filter;

        projectCards.forEach(card => {

            const cardCategory = card.dataset.category;

            if (category === "all" || cardCategory === category) {
            card.classList.remove("hide");
            card.style.animation = "fadeInUp 0.5s ease forwards";
            } else {
            card.classList.add("hide");
            }

        });
        });
    });

});

const projectCards = document.querySelectorAll(".project-card");

    const showProjectsOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
        card.classList.add("show");
        }
    });
};

window.addEventListener("scroll", showProjectsOnScroll);
window.addEventListener("load", showProjectsOnScroll);