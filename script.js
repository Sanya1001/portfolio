const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
// const btn7 = document.getElementById('btn7');
// const btn8 = document.getElementById('btn8');

const navbtn = document.getElementById('nav-btn');
const nav = document.getElementById('nav');

const skills = document.getElementById('skills');
const languages = document.getElementById('languages');
const projects = document.getElementById('projects');
const current = document.getElementById('current');
const leadership = document.getElementById('leadership');
const art = document.getElementById('art');
// const cert = document.getElementById('cert');
// const prof = document.getElementById('prof');

btn1.addEventListener('click', () => {
    skills.classList.toggle('inactive');
})

btn2.addEventListener('click', () => {
    languages.classList.toggle('inactive');
})

btn3.addEventListener('click', () => {
    projects.classList.toggle('inactive');
})

btn4.addEventListener('click', () => {
    current.classList.toggle('inactive');
})

navbtn.addEventListener('click', () => {
    navbtn.classList.toggle('active');
    nav.classList.toggle('active');
})

btn5.addEventListener('click', () => {
    leadership.classList.toggle('inactive');
})

btn6.addEventListener('click', () => {
    art.classList.toggle('inactive');
})

// btn7.addEventListener('click', () => {
//     cert.classList.toggle('inactive');
// })

// btn8.addEventListener('click', () => {
//     prof.classList.toggle('inactive');
// })
