var orderan = [];
var totalpembayaran = 0;

function addOrder() {
  var type = document.getElementById("type").value;
  var hari = document.getElementById("hari").value;

  if (hari === "" || hari <= 0) {
    alert("Masukkan hari yang valid.");
    return;
  }

  var hargaPerDay = 0;
  var totalbayar = 0;

  if (type === "mobil suv") {
    hargaPerDay = 150000;
    totalbayar = hari * hargaPerDay;
  } else if (type === "Mobil sedan") {
    hargaPerDay = 100000;
    totalbayar = hari * hargaPerDay;
  } else if (type === "mobil mpv") {
    hargaPerDay = 300000;
    totalbayar = hari * hargaPerDay;
  } else if (type === "mobil sport") {
    hargaPerDay = 500000;
    totalbayar = hari * hargaPerDay;
  } else if (type === "mobil convertible") {
    hargaPerDay = 400000;
    totalbayar = hari * hargaPerDay;
  } else if (type === "mobil station wagon") {
    hargaPerDay = 200000;
    totalbayar = hari * hargaPerDay;
  } else if (type === "mobil double cabin") {
    hargaPerDay = 200000;
    totalbayar = hari * hargaPerDay;
  } else if (type === "mobil off road") {
    hargaPerDay = 350000;
    totalbayar = hari * hargaPerDay;
  } else if (type === "mobil listrik") {
    hargaPerDay = 400000;
    totalbayar = hari * hargaPerHari;
  } else if (type === "mobil hybrid") {
    hargaPerDay = 400000;
    totalbayar = hari * hargaPerDay;
  } else if (type === "mobil lcgc") {
    hargaPerDay = 150000;
    totalbayar = hari * hargaPerDay;
  } else if (type === "mobil crossover") {
    hargaPerDay = 200000;
    totalbayar = hari * hargaPerDay;
  } else if (type === "mobil coupe") {
    hargaPerDay = 300000;
    totalbayar = hari * hargaPerDay;
  }

  var order = {
    type: type,
    berat: parseFloat(hari),
    totalbayar: totalbayar,
  };

  orderan.push(order);
  totalpembayaran += totalbayar;
  displayorderan();
  displaytotalpembayaran();
}

function displayorderan() {
  var table = document.getElementById("listorderan");
  table.innerHTML = `
    <tr>
      <th>Jenis</th>
      <th>Hari (day)</th>
      <th>Total Harga</th>
      <th>Aksi</th>
    </tr>
  `;
}

for (var i = 0; i < orderan.length; i++) {
  var item = orderan[i];
  var totalbayar = item.totalbayar;

  var row = table.insertRow();
  var jenisCell = row.insertCell(0);
  var hariCell = row.insertCell(1);
  var totalHargaCell = row.insertCell(2);
  var aksiCell = row.insertCell(3);

  jenisCell.innerHTML = item.type;
  hariCell.innerHTML = item.hari;
  totalHargaCell.innerHTML = `<b>${totalbayar}</b>`;

  aksiCell.innerHTML = `<button onclick="editOrder(${i})">Edit</button> <button onclick="devareOrder(${i})">Devare</button>`;
}

function displaytotalpembayaran() {
  var totalpembayaranElement = document.getElementById("totalpembayaran");
  totalpembayaranElement.innerHTML = `<b>Total Pembayaran: ${totalpembayaran}</b>`;
}

function editOrder(index) {
  var newhari = prompt("Masukkan hari yang baru:");
  if (newhari === null || newhari <= 0) {
    alert("Masukkan hari yang valid.");
    return;
  }

  var item = orderan[index];
  totalpembayaran -= item.totalbayar;

  item.hari = parseFloat(newhari);

  if (item.type === "mobil suv") {
    var hargaPerDay = 150000;
    totalbayar = hari * hargaPerDay;
  } else if (item.type === "Mobil sedan") {
    var hargaPerDay = 100000;
    totalbayar = hari * hargaPerDay;
  } else if (item.type === "mobil mpv") {
    var hargaPerDay = 300000;
    totalbayar = hari * hargaPerDay;
  } else if (item.type === "mobil sport") {
    var hargaPerDay = 500000;
    totalbayar = hari * hargaPerDay;
  } else if (item.type === "mobil convertible") {
    var hargaPerDay = 400000;
    totalbayar = hari * hargaPerDay;
  } else if (item.type === "mobil station wagon") {
    var hargaPerDay = 200000;
    totalbayar = hari * hargaPerDay;
  } else if (item.type === "mobil double cabin") {
    var hargaPerDay = 200000;
    totalbayar = hari * hargaPerDay;
  } else if (item.type === "mobil off road") {
    var hargaPerDay = 350000;
    totalbayar = hari * hargaPerDay;
  } else if (item.type === "mobil listrik") {
    var hargaPerDay = 400000;
    totalbayar = hari * hargaPerHari;
  } else if (item.type === "mobil hybrid") {
    var hargaPerDay = 400000;
    totalbayar = hari * hargaPerDay;
  } else if (item.type === "mobil lcgc") {
    var hargaPerDay = 150000;
    totalbayar = hari * hargaPerDay;
  } else if (item.type === "mobil crossover") {
    var hargaPerDay = 200000;
    totalbayar = hari * hargaPerDay;
  } else if (item.type === "mobil coupe") {
    var hargaPerDay = 300000;
    totalbayar = hari * hargaPerDay;
  }

  totalpembayaran += item.totalbayar;
  displayorderan();
  displaytotalpembayaran();
}

function devareOrder(index) {
  var devaredOrder = orderan[index];
  totalpembayaran -= devaredOrder.totalbayar;
  orderan.splice(index, 1);
  displayorderan();
  displaytotalpembayaran();
}

function calculatekembalian() {
  var amountPaid = parseFloat(document.getElementById("amountPaid").value);
  if (amountPaid < totalpembayaran) {
    alert("Jumlah bayar kurang!");
    return;
  }

  var kembalian = amountPaid - totalpembayaran;
  displaykembalian(kembalian);
}

function displaykembalian(kembalian) {
  var kembalianElement = document.getElementById("kembalian");
  if (kembalian >= 0) {
    kembalianElement.innerHTML = `<b>Kembalian: ${kembalian}</b>`;
  } else {
    kembalianElement.innerHTML = "<b>Jumlah bayar kurang!</b>";
  }
}
