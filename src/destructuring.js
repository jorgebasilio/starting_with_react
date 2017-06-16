export const exportandoEstaFuncion = () => {
  const obj = {
    valor1: 'Este es el valor 1',
    valor2: 4,
    valor3: {
      subValor1: 'dentro del valor3'
    }
  }

  const obj2 = {
    valor5: 'este es el valor del otro objecto',
    valor6: {
      valor7: [1,2,3,4]
    }
  }

  const obj3 = {obj, obj2};
  console.log(obj3);
  
  // let { valor1, valor2, valor3, valor3: { subValor1 } } = obj;
  //
  // let arr = ['valor1', 'valor2', 'valor3']
  // let [b, ...b] = arr;
  // console.log(jorge, 'este es el arreglo');
  // console.log(b, 'este es el arreglo');
  //
  // console.log(valor1);
  // console.log(valor2);
  // console.log(valor3);
  // console.log(subValor1);
}

let algo = 2;
export default algo;
