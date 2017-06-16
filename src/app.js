// Teniendo en cuenta que la principal función de un componente React
// es la de traducir datos y pintarlos en un HTML, podemos decir que
// tanto props como state constituyen los datos en bruto de dicho componente.
// 
// Tanto las props como el state son objetos JavaScript simples y los
// cambios en ambos desencadenan la ejecución del método render() del
// componente, entonces, ¿cuándo utilizamos props y cuándo  state?
// 
// La respuesta es sencilla. Si un componente va a necesitar modificar
// alguno de sus atributos en algún momento de su vida, entonces ese 
// atributo debe formar parte de su estado, de lo contrario será una 
// propiedad de dicho componente.
// 

import React, { Component } from 'react';

// importando componentes
import Sumar from './sumar';
import Restar from './restar';

class App extends Component {
  // State
  // 
  // Podríamos definirlo como una representación del componente en un
  // punto en el tiempo, una instantánea del componente. El state de un
  // componente se iniciará con un valor por defecto pero este valor si
  // podrá mutar durante la vida del componente.
  // 
  // No tenemos porque definir estados para un componente, son opcionales,
  // y al contrario que ocurre con las props, un componente puede gestionar
  // su propio state. Pero debemos ser cautos a la hora de utilizar estados
  // ya que su uso, citando a la propia documentación, aumenta la complejidad
  // y reduce la previsibilidad. Se debe evitar tener demasiados componentes
  // con estados, sobre todo tratándose de aplicaciones grandes.
  // 
  // “Try to keep as many of your components as possible stateless”
  // 
  // La manera habitual de informar a un componente React que sus datos han cambiado,
  // es a través de la llamada al método setState(). Este método recibe un objeto 
  // JavaScript plano, combina los nuevos datos en el state y re-renderizará el componente.
  // Cuando el render finalize se ejecutará un callback si ha sido especificado.
  // 
  // this.setState( { key: 'value' } );
  //

  constructor() {
    super();
    this.state = {
      number: 0
    }

  // Funciones vinculantes
  //
  // las funciónes limitadas en JavaScript son funciónes
  // que están limitadas a un contexto dado. Eso significa 
  // que no importa cómo lo llames, el contexto de la llamada
  // permanecerá igual. La única excepción es el nuevo operador
  // que siempre devuelve un nuevo contexto.
  //
  // Para crear una función limitada fuera de la función regular,
  // se utiliza el método bind. El metodo bind toma el contexto al
  // que desea vincular su función como un primer argumento. El resto
  // de argumentos son argumentos que siempre se pasarán a dicha función.
  // Esto devuelve una función limitada como resultado.

    this._sumar = this._sumar.bind(this);
    this._restar = this._restar.bind(this);
  }

  _sumar(){
    // Destructuring
    //
    // La sintaxis de destructuring assignment es una expresión de JavaScript
    // que hace posible la extracción de datos de arreglos u objetos usando una
    // sintaxis que equivale a la construcción de arreglos y objetos literales.
    //
    // por ejemplo en toda la aplicacion estamos utilizando la extracion de objetos
    // con destructuring

    const { number } = this.state;
    this.setState({number: number + 1})
  }

  _restar() {
    const { number } = this.state;
    this.setState({number: number - 1})
  }

  // Props
  //
  // Las propiedades de un componente se pueden definir como los atributos de
  // configuración para dicho componente. Son recibidos desde un nivel superior
  // (normalmente al instanciar el componente) y por definición son inmutables,
  // es decir, un componente no puede cambiar sus propias props.

  render() {
    const { _sumar, _restar, state: { number } } = this;
    return(
      <div>
        <Sumar sumar={ _sumar } /> 
        <h1>{ number }</h1>
        <Restar restar={ _restar } />
      </div>
    );
  }
}

export default App;
