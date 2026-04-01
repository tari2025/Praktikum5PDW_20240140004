const dataPesawat = [
  {
    operator: "AirAsia",
    aircraft: "Airbus A320",
    date: "28-12-2014",
    route: "Surabaya - Singapore",
    cause: "Technical Failure & Pilot Error",
    fatal: 162,
    survivors: 0,
    img: "photos/airasia.jpg"
  },
  {
    operator: "Lion Air",
    aircraft: "Boeing 737 MAX 8",
    date: "29-10-2018",
    route: "Jakarta - Pangkal Pinang",
    cause: "MCAS System Failure",
    fatal: 189,
    survivors: 0,
    img: "photos/lionair.jpg"
  },
  {
    operator: "Sriwijaya Air",
    aircraft: "Boeing 737-500",
    date: "09-01-2021",
    route: "Jakarta - Pontianak",
    cause: "Autothrottle Failure",
    fatal: 62,
    survivors: 0,
    img: "photos/sriwijaya.jpg"
  }
];

const tableBody = document.querySelector("#crashTable tbody");

dataPesawat.forEach(item => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>
      <img src="${item.img}">
    </td>
    <td class="desc">
      <b>Operator :</b> ${item.operator}<br>
      <b>Aircraft :</b> ${item.aircraft}<br>
      <b>Date :</b> ${item.date}<br>
      <b>Route :</b> ${item.route}<br>
      <b>Crash Cause :</b> ${item.cause}<br>
      <b>Total Fatal :</b> ${item.fatal}<br>
      <b>Survivors :</b> ${item.survivors}
    </td>
  `;

  tableBody.appendChild(row);
});