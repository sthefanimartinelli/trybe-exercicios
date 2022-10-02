const header = document.querySelector('#header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const sectionEmergency = document.querySelectorAll('.emergency-tasks')[0];
sectionEmergency.style.backgroundColor = 'rgb(255, 159, 132)';

const sectionNoEmergency = document.querySelectorAll('.no-emergency-tasks')[0];
sectionNoEmergency.style.backgroundColor = 'rgb(249, 219, 94)';

const emergencyTitles = document.querySelectorAll('.emergency-tasks h3');
for (index = 0; index < emergencyTitles.length; index += 1) {
    emergencyTitles[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const nonEmergencyTitles = document.querySelectorAll('.no-emergency-tasks h3');
for (index = 0; index < nonEmergencyTitles.length; index += 1) {
    nonEmergencyTitles[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';