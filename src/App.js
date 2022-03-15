import './App.css';
import { CardList } from './components/Card-List/card-list.component';
import { useGetPostsQuery } from './services/posts'
function App() {
  const { data, isSuccess } = useGetPostsQuery();

  return (
    <div className="App">
      <h1>Placeholder Posts</h1>
      {isSuccess &&
        <CardList posts={data} />
      }
    </div>
  );
}

export default App;
