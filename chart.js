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
const barColors = "#00aba9";

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
const barColors = "#00aba9";

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

//============================= Chart 5 =========================
{
const xValues = ["Gol I", "Gol II", "Gol III", "Gol IV"];
const yValues = [55, 49, 44, 24];
const barColors = "#00aba9";

new Chart("myChart5", {
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
      text: "Golongan"
    }
  }
});
}

//============================= Chart 6 =========================
{
const xValues = ["Eselon I", "Eselon II", "Eselon III", "Eselon IV", "Eselon V"];
const yValues = [55, 49, 44, 24, 50];
const barColors = "#00aba9";

new Chart("myChart6", {
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
      text: "Eselon"
    }
  }
});
}

//============================= Chart 7 =========================
{
const xValues = ["SD", "SLTP", "SLTA", "DI-DII", "DII", "DIV", "S1", "S2", "S3"];
const yValues = [55, 49, 44, 24, 24, 30, 100, 30, 10];
const barColors = "#00aba9";

new Chart("myChart7", {
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
      text: "Pendidikan"
    }
  }
});
}

//============================= Chart 8 =========================
{
const xValues = ["Januari 2025", "Februari 2025", "Maret 2025", "April 2025", "Mei 2025", "Juni 2025"];
const yValues = [55, 49, 44, 24, 25, 27];
const barColors = "#00aba9";

new Chart("myChart8", {
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
      text: "BUP"
    }
  }
});
}