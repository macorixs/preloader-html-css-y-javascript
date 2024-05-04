document.addEventListener("DOMContentLoaded", function() {
    var progressBar = document.getElementById("progress");
    var progressValue = 0;
    var interval = setInterval(function() {
      progressValue++;
      progressBar.style.width = progressValue + "%";
      progressBar.textContent = progressValue + "%";
      if (progressValue >= 100) {
        clearInterval(interval);
        // Aquí podrías añadir cualquier otra acción que desees después de que se complete el preloader
      }
    }, 50640);
  });