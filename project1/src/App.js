import logo from './logo.svg';
import './App.css';
import  Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';

function App() {
  let Todos = [
    {
      sno: 1,
      title: "go to the market",
      desc: "You need to go to the market to get this job 1 done"
    },
    {
      sno: 2,
      title: "go to the school",
      desc: "You need to go to the market to get this job 2 done"
    },
    {
      sno: 3,
      title: "go to the gym",
      desc: "You need to go to the market to get this job 3 done"
    }
  ]
  return (
    <>
    <Header  title="Todos List" />
    <Todos todos={Todos }/>
    <Footer />
    </>
  );
}

export default App;
