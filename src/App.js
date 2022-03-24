import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header'
import Heading from './components/Heading';
import Mealdb from './components/TheMealDB/Mealdb';

function App() {
  return (
    <div className='bg-color'>
      <Header></Header>
      <Heading></Heading>
      <Mealdb></Mealdb>
      <Footer></Footer>
    </div>
  );
}

export default App;
