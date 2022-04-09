import './App.css';

function App() {
  const user = {
    Name: 'Pancho',
    lastName: 'Barraza',
  }
  function greeting(user){
    if (user.Name && user.lastName){
      return user.Name + ' ' + user.lastName;
    }
    return 'stranger';
  }
  
  return (
      <div>
      <h1 className="title">Hola, {greeting(user)}</h1>
      <p className="cuerpo">Wenas</p>
      </div> 
  );
}

export default App;
