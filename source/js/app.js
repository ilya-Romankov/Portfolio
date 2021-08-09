'use strict';


const header = document.getElementById('header');
const close = document.getElementById('close');

const section = {
    "about": document.getElementById('about'),
    "project": document.getElementById('project'),
    "technologies": document.getElementById('technologies')
}

const links = {
    "about": document.getElementById("aboutLink"),
    "project": document.getElementById("projectLink"),
    "technologies": document.getElementById("technologiesLink")
}

let headerShowAdd = () => {
    header.classList.add('header--show');
}

let headerShowRemove = () => {

        header.classList.remove('header--show')

};

let delShow = () => {
    Object.values(section).forEach(item => {
       item.classList.remove('show');
    });
}

links.about.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (section.about.classList.contains('show')) {
        delShow();
        headerShowRemove();
        return false;
    }
    headerShowAdd();
    delShow();
    section.about.classList.add('show');  
    
});

links.project.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (section.project.classList.contains('show')) {
        delShow();
        headerShowRemove();
        return false;
    }
    headerShowAdd();
    delShow();
    section.project.classList.add('show');
});

links.technologies.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (section.technologies.classList.contains('show')) {
        delShow();
        headerShowRemove();
        return false;
    }
    headerShowAdd();
    delShow();
    section.technologies.classList.add('show');
});

close.addEventListener('click', (evt) => {
    evt.preventDefault();
    delShow();
    headerShowRemove();
});

