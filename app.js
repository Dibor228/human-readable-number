function toReadable(number){
  const edinici = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const drochilovo = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const desyatki = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let h = 'hundred';
  if (number < 0){return 'idi naxui otsuda'}
  if (number < 10 && number >=0){return edinici[number]}
  if (number >= 10 && number < 20){return drochilovo[number % 10]}
  if (number >=20 && number < 100){return (desyatki[Math.trunc(number / 10) - 2] + ' ' + edinici[number % 10])}
  if (number % 100 === 0){return (edinici[Math.trunc(number / 100)] + ' ' + h)}
  if (number >= 100 && number < 1000){return (edinici[Math.trunc(number / 100)] + ' ' + h + ' ' + desyatki[Math.trunc(((number % 100) / 10) - 2)] + ' ' + edinici[number % 10])}
}
console.log(toReadable());
