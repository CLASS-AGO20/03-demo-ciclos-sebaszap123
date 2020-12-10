export default class App {
  presentacion() {
    for (let i = 5; i <= 25; i = i + 5) {
      console.log(i);
    }
  }
 sumarParesFor() {
   let suma = 0;

   for(let i = 1; i <= 20; i = i + 1) {
     if(i%2 === 0) {
       suma = suma + i;
     }
   }
   return suma;
  }

  sumarParesDo() {
    let i = 1;
    let suma = 0;
    do {
      if(i % 2 == 0) {
        suma = suma + i;
      }
      i++;
    } while (i <= 20);

    return suma
  }
}

let app = new App();

console.log("demo de función for");

app.presentacion();

console.log(app.sumarParesFor());

console.log(app.sumarParesDo());

