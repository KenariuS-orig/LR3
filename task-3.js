function checkForSpam(message)
{
  const lowerCaseMessage = message.toLowerCase();

  return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

console.log(checkForSpam("Latest technology news")); 
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!")); 
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spammessage")); 
console.log(checkForSpam("Get rid of sPaM emails. Our bookin on sale!")); 
console.log(checkForSpam("[SPAM] How to earn fastmoney?")); 


