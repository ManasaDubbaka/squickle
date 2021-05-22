import PrimarySearchAppBar from './components/appbar';
import Welcome from './components/welcome';
import MediaCard from './components/stock.js';
import MediaCardRow2 from './components/row2.js';

function App() {
  return (
    <div>
      <PrimarySearchAppBar/>
    <Welcome/>
    <MediaCard/>
   <MediaCardRow2/>  
    </div>
  );
}

export default App;
