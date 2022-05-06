const colors = {

    createColors: () => {
        let index = 0;
        for (let couleur of couleurs) {
            
        // Creation des div tube, color et title
        let tube = document.createElement('div');
        let color = document.createElement('div');
        let title = document.createElement('div');

        // Attribution des css
        tube.classList.add('tube');
        color.setAttribute("id", index);
        color.classList.add('color');
        color.classList.add(couleur.en);
        title.classList.add('color-name');

        // Récupération du parent
        let container = document.querySelector('.container');

        // Ajout des enfants aux parents
        container.appendChild(tube);
        tube.appendChild(color);
        color.appendChild(title);

        title.textContent = couleur.fr;
        
        index++;
        }
    }, 

    playColor: (event) => {
        console.log(couleurs[event.target.id].sound);
        let sound = document.createElement('audio');
        sound.src = couleurs[event.target.id].sound;
        sound.play();
        console.log(event.target.id);
    },

    soundListener() {
        // let color = document.getElementsByClassName('color');
        // console.log(color);
        document.addEventListener('click', colors.playColor);
    },


    init: () => {

        colors.createColors();
        colors.soundListener();
    }

}

// Initialisation quand le DOM est pret
document.addEventListener('DOMContentLoaded', colors.init);