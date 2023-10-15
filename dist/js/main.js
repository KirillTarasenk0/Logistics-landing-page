const firstLink = document.getElementById('firstLink');
const secondLink = document.getElementById('secondLink');
const thirdLink = document.getElementById('thirdLink');
const serviceCard = document.querySelectorAll('.main__service-card');
const serviceImage = document.querySelectorAll('.main__service-image');
const serviceLabel = document.querySelectorAll('.main__service-label');
const serviceSvgImage = document.querySelectorAll('.service__image');
const menuOpenBtn = document.getElementById('menuOpenBtn');
const burgerMenuContainer = document.getElementById('burgerMenuContainer');
const generalContainer = document.getElementById('generalContainer');
const burgerExitBtn = document.getElementById('burgerExitBtn');

firstLink.addEventListener('click', function() {
    resetStyles([secondLink, thirdLink]);
    firstLink.style.color = '#FFFFFF';
    firstLink.style.opacity = 1;
});
secondLink.addEventListener('click', function() {
    resetStyles([firstLink, thirdLink]);
    secondLink.style.color = '#FFFFFF';
    secondLink.style.opacity = 1;
});
thirdLink.addEventListener('click', function() {
    resetStyles([firstLink, secondLink]);
    thirdLink.style.color = '#FFFFFF';
    thirdLink.style.opacity = 1;
});

function resetStyles(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = '#FFFFFF';
        elements[i].style.opacity = 0.5;
    }
}

for (let i = 0; i < serviceImage.length; i++) {
    serviceCard[i].addEventListener('mouseover', function() {
        serviceImage[i].classList.add('image__circle');
        serviceImage[i].style.marginLeft = '105px';
        serviceLabel[i].style.paddingTop = '5px';
        serviceSvgImage[i].style.fill = '#2F343A';
    });
    serviceCard[i].addEventListener('mouseout', function() {
        serviceImage[i].classList.remove('image__circle');
        serviceLabel[i].style.paddingTop = '43px';
        serviceImage[i].style.marginLeft = '123px';
        serviceSvgImage[i].style.fill = '#FFFFFF';
    });
}

menuOpenBtn.addEventListener('click', function() { 
    burgerMenuContainer.style.display = 'block';
    generalContainer.style.display = 'none';
});
burgerExitBtn.addEventListener('click', function() {
    generalContainer.style.display = 'block'; 
    burgerMenuContainer.style.display = 'none';
});
