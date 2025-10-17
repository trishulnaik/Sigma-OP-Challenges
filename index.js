let businessName = null;

const generateAdjective = () => {
  let randomNumber = Math.random();
  if(randomNumber<0.3){
    return "Crazy";
  }
  else if(randomNumber>0.6){
    return "Amazing";
  }
  else return "Fire";
}
const generateShopName = () => {
  let randomNumber = Math.random();
  if(randomNumber<0.3){
    return "Engine";
  }
  else if(randomNumber>0.6){
    return "Foods";
  }
  else return "Garments";
}
const generateAnotherWord = () => {
  let randomNumber = Math.random();
  if(randomNumber<0.3){
    return "Bros";
  }
  else if(randomNumber>0.6){
    return "Limited";
  }
  else return "Hub";
}

businessName = generateAdjective() + generateShopName() + generateAnotherWord(); 

alert(`Your business Name is: ${businessName}`)