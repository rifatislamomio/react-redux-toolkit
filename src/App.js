import './App.css';
import { CardList } from './components/Card-List/card-list.component';

function App() {
  
  return (
    <div className="App">
      <h1>Placeholder Posts</h1>
      <CardList posts={posts} />
    </div>
  );
}

export default App;
