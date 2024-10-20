function getShippingCost(country)
{

  const shippingPrices =
   {
    China: 100,
    Chile: 250,
    Australia: 170,
    Jamaica: 120
   };

    const price = shippingPrices[country];
  if(!price)
  {
    return "Sorry, there is no delivery to your country";
  }
    return  `Shipping to ${country} will cost ${price} credits`;
}


console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden"));