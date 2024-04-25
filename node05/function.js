function getSeniales() {
    let seniales = [];
    let signal = prompt("Ingrese una señal (negativo para terminar):");
    while (signal >= 0) {
        seniales.push(signal);
        signal = prompt("Ingrese otra señal (negativo para terminar):");
    }
    return seniales;
}

function determinarCuadrante(grado) {
    const cuadrantes = ['N', 'E', 'S', 'O'];
    const index = Math.floor(grado / 90) % 4;
    return cuadrantes[index];
}
function obtenerSecuencia(seniales) {
    let secuencia = '';
    seniales.forEach(signal => {
        const cuadrante = determinarCuadrante(signal);
        secuencia += cuadrante + ' ';
    });
    return secuencia.trim();
}


function contarCiclos(secuencia) {
    let ciclos = 0;
    const cuadrantesConcatenados = secuencia + secuencia[0];
    for (let i = 0; i < cuadrantesConcatenados.length - 1; i++) {
        const subsecuencia = cuadrantesConcatenados.slice(i, i + 4);
        if (subsecuencia === 'NESO' || subsecuencia === 'OSEN') {
            ciclos++;
        }
    }
    return ciclos;
}


function calcularPorcentajeCuadrante(secuencia, cuadrante) {
    const totalCuadrantes = secuencia.split(' ').length;
    const cuadranteOcurrencias = secuencia.split(' ').filter(c => c === cuadrante).length;
    return (cuadranteOcurrencias / totalCuadrantes) * 100;
}