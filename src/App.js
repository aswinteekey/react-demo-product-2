import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeProduct from './components/HomeProduct';
import UserComments from './components/UserComments';

function App() {
  return (
    <div className="App">
     <HomeProduct/>
     <UserComments/>
    </div>
  );
}

export default App;
