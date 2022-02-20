function valoracion() {
  var puntos = document.getElementById("rango").value;
  alert("Has valorado con " + puntos + " puntos");
}

function cuenta() {
  var cuenta = document.getElementById("cuenta").value;

  var pais = document.getElementById("pais").value;
  var i = document.getElementById("iban").value;
  var e = document.getElementById("entidad").value;
  var s = document.getElementById("sucursal").value;
  var d = document.getElementById("dc").value;

  alert(
    "Le informamos que su cuenta bancaria es: " +
      pais +
      i +
      "-" +
      e +
      "-" +
      s +
      "-" +
      d +
      "-" +
      cuenta
  );
}

function date() {
  var fecha = document.getElementById("fecha").value;

  alert("La fecha seleccionada en el elemento de fecha es un " + fecha);
}

function validar() {
  var x = document.getElementById("cp").value;

  if (x == 01) {
    alert("Álava");
  }else {
    alert("#El campo está vacío");

  }
  if (x == 02) {
    alert("Albacete");
  }else {
    alert("#El campo está vacío");

  }
  if (x == 03) {
    alert("Alicante");
  }else {
    alert("#El campo está vacío");

  }
  if (x == 04) {
    alert("Almería");
  }
  if (x == 05) {
    alert("Ávila");
  }
  if (x == 06) {
    alert("Badajoz");
  }
  if (x == 07) {
    alert("Islas Baleares");
  }
  if (x == 08) {
    alert("Barcelona");
  }
  if (x == 09) {
    alert("Burgos");
  }
  if (x == 10) {
    alert("Cáceres");
  }
  if (x == 11) {
    alert("Cádiz");
  }
  if (x == 12) {
    alert("Catellón");
  }
  if (x == 13) {
    alert("Ciudad Real");
  }
  if (x == 14) {
    alert("Córdoba");
  }
  if (x == 15) {
    alert("La Coruña");
  }
  if (x == 16) {
    alert("Cuenca");
  }
  if (x == 17) {
    alert("Gerona");
  }
  if (x == 18) {
    alert("Granada");
  }
  if (x == 19) {
    alert("Guadalajara");
  }
  if (x == 20) {
    alert("Guipúzcoa");
  }
  if (x == 21) {
    alert("Huelva");
  }
  if (x == 22) {
    alert("Huesca");
  }
  if (x == 23) {
    alert("Jaén");
  }
  if (x == 24) {
    alert("León");
  }
  if (x == 25) {
    alert("Lérida");
  }
  if (x == 26) {
    alert("La Rioja");
  }
  if (x == 27) {
    alert("Lujo");
  }
  if (x == 28) {
    alert("Madrid");
  }
  if (x == 29) {
    alert("Málaga");
  }
  if ((x = 30)) {
    alert("Murcia");
  }
  if (x == 31) {
    alert("Navarra");
  }
  if (x == 32) {
    alert("Orense");
  }
  if (x == 33) {
    alert("Asturias");
  }
  if (x == 34) {
    alert("Palencia");
  }
  if (x == 35) {
    alert("Las Palmas");
  }
  if (x == 36) {
    alert("Pontevedra");
  }
  if (x == 37) {
    alert("Salamanca");
  }
  if (x == 38) {
    alert("Santa Cruz de Tenerifes");
  }
  if (x == 39) {
    alert("Cantabria");
  }
  if (x == 40) {
    alert("Segovia");
  }
  if (x == 41) {
    alert("Sevilla");
  }
  if (x == 42) {
    alert("Soria");
  }
  if (x == 43) {
    alert("Tarragona");
  }
  if ((x = 44)) {
    alert("Teruel");
  }
  if ((x = 45)) {
    alert("Toledo");
  }
  if ((x = 46)) {
    alert("Valecia");
  }
  if ((x = 47)) {
    alert("Valladolid");
  }
  if ((x = 48)) {
    alert("Vizcaya");
  }
  if ((x = 49)) {
    alert("Zamora");
  }
  if ((x = 50)) {
    alert("Zaragoza");
  }
  if ((x = 51)) {
    alert("Ceuta");
  }
  if ((x = 52)) {
    alert("Melilla");
  } else {
    alert("#El campo está vacío");

  }
}
