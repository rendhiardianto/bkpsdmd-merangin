//===================================== Chart 1 ==================================
{
const xValues = ["Laki-Laki", "Perempuan"];
const yValues = [55, 49];
const barColors = [ "#b91d47", "#00aba9"];

new Chart("myChart1", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Jenis Kelamin"
    }
  }
});
}
// ================================== Chart 2 =======================================
{
const xValues = ["PNS", "PPPK"];
const yValues = [55, 49];
const barColors = [ "blue", "green"];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Status Kepegawaian"
    }
  }
});
}

//============================= Chart 3 =========================
{
const xValues = ["18-20", "21-30", "31-40", "41-50", "51-60", "Diatas 60"];
const yValues = [55, 49, 44, 24, 15, 17];
const barColors = "blue";

new Chart("myChart3", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },

    title: {
      display: true,
      text: "Usia ASN"
    }
  }
});
}

//============================= Chart 4 =========================
{
const xValues = ["Baby Boomer", "Generasi X", "Generasi Y", "Generasi Z"];
const yValues = [55, 49, 44, 24];
const barColors = "red";

new Chart("myChart4", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },

    title: {
      display: true,
      text: "Generasi"
    }
  }
});
}