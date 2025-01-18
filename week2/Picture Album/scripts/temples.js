document.getElementById('menu').addEventListener('click', function() {
    const navigation = document.querySelector('.navigation');
    this.classList.toggle('show');
    navigation.classList.toggle('show');
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("modifiedDate").textContent = lastModified;
