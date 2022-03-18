
let nom = document.getElementById('nom');
//enlever la class error si ajouter
let removeError = function() { 
    nom.classList.remove('error'); 
};
//fonction de validation du nom
function validation(event){
    event.preventDefault();
    let message=document.getElementById("message");
    let mt1=/^(([a-zèéê]+)?(\b(\-|'))?(\b\s+)?([a-zèéê]+?)(\s+)?)+$/gi;
    //nom valide
    if(nom.value.match(mt1))
    {   //ajouter une bordure verte
        nom.style.borderColor='rgb(156, 252, 13)';
        //afficher un message 
        message.innerHTML="Nom Valide";
        //couleur du message verte
        message.style.color='rgb(156, 252, 13)';
    }
    else
    {
        //ajouter la class error
        nom.classList.add('error');
        //bordure rouge avec une animation (vibration)
        nom.style.borderColor='rgb(241, 67, 67)';
        //vider le champs du nom
        nom.value="";
        //message d'erreur
        message.innerHTML="Nom invalide";
        //couleur rouge du message
        message.style.color='rgb(241, 67, 67)'; 
    }
}

