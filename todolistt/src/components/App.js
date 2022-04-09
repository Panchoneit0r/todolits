import Header from '../shared/layout/Header';
//import Home from './Home/Home';
import Todo from './Todo/Todo';
import './App.css';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';

function App() {
  return (
    <div className="App">
      <Header title="Tu app" url="https://www.youtube.com/watch?v=H6LLfczz8hM"/>
      
      <Content>
        <Todo/>
      </Content>

      <Footer />
    </div>
  );
}
export default App;
