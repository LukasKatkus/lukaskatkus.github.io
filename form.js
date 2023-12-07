let vartotojas = {};

function saveInfo() {
  let vardas = document.getElementById("firstName").value;
  let pavarde = document.getElementById("lastName").value;
  let gimimoData = document.getElementById("birthdate").value;

  vartotojas.vardas = vardas;
  vartotojas.pavarde = pavarde;
  vartotojas.gimimoData = gimimoData;

  console.log("Vartotojo informacija:", vartotojas);
  let userInfoDisplay = document.getElementById("userInfoDisplay");
      userInfoDisplay.innerHTML = `<p>Vartotojo vardas: ${vartotojas.vardas}</p>` +
                                  `<p>Vartotojo pavardė: ${vartotojas.pavarde}</p>` +
                                  `<p>Gimimo data: ${vartotojas.gimimoData}</p>` +
                                  `<p>${skaiciuotiAmziu()}</p>`;
}
function skaiciuotiAmziu() {
    let gimimoData = document.getElementById("birthdate").value;
    let dabartineData = new Date();
    let gimimoLaikas = new Date(gimimoData);
    let skirtumas = dabartineData - gimimoLaikas;

    let vienosDienosLaikas = 1000 * 60 * 60 * 24; // milisekundės * sekundės * minutės * valandos
    let dienos = Math.floor(skirtumas / vienosDienosLaikas);
  
    if (dienos > 0) {
        let zodis = (dienos % 10 === 1) ? 'dieną' : ((dienos % 10 === 0 || (dienos % 100 >= 10 && dienos % 100 <= 20)) ? 'dienų' : 'dienas');
        let dydis = (dienos <= 1000) ? '10px' : (dienos <= 7000) ? '16px' : '20px';
        let rezultatas = `${vartotojas.vardas} ${vartotojas.pavarde} išgyveno jau ${dienos} ${zodis}.`;
        
        return `<span style="font-size: ${dydis};">${rezultatas}</span>`;
      } else {
        alert("Klaidinga gimimo data įvesta!!");
        return '';
      }
}