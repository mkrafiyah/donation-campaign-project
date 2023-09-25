const getSaveCard = () =>{
   const storedCard = localStorage.getItem('stored-card');
   if(storedCard){
    return JSON.parse(storedCard);
   }
   return [];
}
const saveCard = (id) =>{
    const storedCard = getSaveCard();
    const exists = storedCard.find(cardId => cardId === id);
    if(!exists){
      storedCard.push(id);
      localStorage.setItem('stored-card', JSON.stringify(storedCard))
    }
}


export {getSaveCard, saveCard};