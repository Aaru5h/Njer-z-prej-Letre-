const quotes=[
  "Një libër i mirë nuk na jep gjithmonë përgjigje; ndonjëherë na mëson të pyesim më mirë.",
  "Në margjinat e një faqeje mund të fillojë një bisedë që zgjat vite.",
  "Leximi është një mënyrë e qetë për t'i bërë vend një jete tjetër.",
  "Ka fjali që na gjejnë pikërisht kur nuk dinim çfarë po kërkonim.",
  "Një mendim bëhet më i pasur kur guxojmë ta ndajmë me dikë tjetër.",
  "Disa libra nuk mbarojnë kur i mbyllim; ata vazhdojnë brenda nesh.",
  "Kur lexojmë me kujdes, edhe heshtja mes fjalëve ka diçka për të thënë."
];
export function getDailyQuote(now=new Date()){
  const date=new Intl.DateTimeFormat('en-CA',{year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
  const day=Math.floor(Date.parse(`${date}T00:00:00Z`)/86400000);
  return {date,quote:quotes[((day%quotes.length)+quotes.length)%quotes.length]};
}
