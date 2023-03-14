import { useEffect, useState } from 'react';
import './App.css';

const eventFn = () => {
  console.log('h1 clicado');
};
function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('componentDidUpdate'); // executa toda vez que o compoenente atualiza;
  });

  useEffect(() => {
    console.log('componentDidMount'); // executa 1x, pois não tem dependências;
  }, []);

  useEffect(() => {
    console.log('Contador mudou para', counter); // executa toda vez que a dependência mudar;
  }, [counter]);

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);
    return () => {
      // componentWillUmount => Limpa o código antes de renderizar novamente, imperdindo que ocorra acúmulo de "lixo"
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  return (
    <div className="App">
      <h1>Contador4: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
