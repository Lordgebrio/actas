function inicializarCanvasFirma(canvasId, inputId, botonLimpiarId) {
    const canvas = document.getElementById(canvasId);
    const input = document.getElementById(inputId);
    const botonLimpiar = document.getElementById(botonLimpiarId);
    const ctx = canvas.getContext("2d");
    let dibujando = false;
  
    // Configuración inicial del canvas
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
  
    // Eventos para dibujar
    canvas.addEventListener("mousedown", (e) => {
      dibujando = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    });
  
    canvas.addEventListener("mousemove", (e) => {
      if (dibujando) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
      }
    });
  
    canvas.addEventListener("mouseup", () => {
      dibujando = false;
      ctx.closePath();
      // Guardar la firma en el campo oculto
      input.value = canvas.toDataURL();
    });
  
    canvas.addEventListener("mouseleave", () => {
      dibujando = false;
    });
  
    // Limpiar el canvas
    botonLimpiar.addEventListener("click", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      input.value = ""; // Limpiar el campo oculto
    });
  }
  
  // Inicializar los campos de firma
  inicializarCanvasFirma("firmaColaboradorCanvas", "firmaColaborador", "limpiarFirmaColaborador");
  inicializarCanvasFirma("firmaTecnicoCanvas", "firmaTecnico", "limpiarFirmaTecnico");