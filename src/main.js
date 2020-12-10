export default class App {
  presentacion() {
    for (let i = 5; i <= 25; i = i + 5) {
      console.log(i);
    }
  }
  sumarParesFor() {
    let suma = 0;

    for (let i = 1; i <= 20; i = i + 1) {
      if (i % 2 === 0) {
        suma = suma + i;
      }
    }
    return suma;
  }
  contarImparesFor(inicio, fin) {
    let impares = 0;
    for (let i = inicio; i <= fin; i = i + 1) {
      if (i % 2 !== 0) {
        impares = impares + 1;
      }
    }
    return impares;
  }
  sumarParesWhile() {
    let i = 1;
    let suma = 0;

    while (i <= 20) {
      if (i % 2 === 0) {
        suma = suma + i;
      }
      i = i + 1;
    }
    return suma;
  }

  contarImparesWhile(inicio, fin) {
    let i = inicio;
    let impares = 0;

    while (i <= fin) {
      if (i % 2 !== 0) {
        impares++;
      }
      i++;
    }
    return impares;
  }

  sumarParesDo() {
    let i = 1;
    let suma = 0;
    do {
      if (i % 2 == 0) {
        suma = suma + i;
      }
      i++;
    } while (i <= 20);

    return suma;
  }

  contarImparesDo(inicio, fin) {
    if (inicio > fin) {
      let t = inicio;
      inicio = fin;
      fin = t;
    }
    let i = inicio;
    let impares = 0;

    do {
      if (i % 2 !== 0) {
        impares++;
      }
      i++;
    } while (i <= fin);
    return impares;
  }
}

let app = new App();

console.log("demo de función for");

app.presentacion();

console.log(app.sumarParesFor());

console.log(app.contarImparesFor());

console.log(app.sumarParesWhile());

console.log(app.contarImparesWhile(5, 11));

console.log(app.sumarParesDo());

console.log(app.contarImparesDo(11, 5));
