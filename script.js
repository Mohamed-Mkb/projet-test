/*
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
    getRandomInt(1, 10);
*/
document.addEventListener('DOMContentLoaded', function () {
                                                  
  // Sélection des éléments du DOM
                            
  const commandeInput = document.getElementById('commandeInput');
  const nameInput = document.getElementById('nameInput');
  const commandeBtn = document.getElementById('commandeBtn');                   
  // Ajout d'un écouteur d'événements pour le clic sur le bouton Commander
                            
  commandeBtn.addEventListener('click', function() {
      afficherCommande();
  });

  // Fonction pour ajouter la commande à ma liste, puis l'afficher

  function createList() {
    let commandeList ={

      commande : commandeInput.value,
      name : nameInput.value,
      
      require : function() {
        if ((this.commande != '') && (this.name != '')) {
          afficherCommande();
          alert("Votre commande à bien était confirmée, Merci " + this.name + ".🎔");
        }

        else {
          alert("Veulliez remplir votre commande ET votre nom, S'il vous plait.");
        };
      },
    };

    function afficherCommande() {
      let listElement = document.createElement('li');
      listElement.textContent = "Commande de " + nameInput.value + " : " + commandeInput.value;

      console.log(commandeList);
      
      // Reset le champ de texte
      commandeInput.value = '';
      nameInput.value = '';
  };

}
});