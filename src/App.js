
import './App.css';
import NewPost from './components/NewPost';
import Posts from './components/Posts';


function App() {
  return (
    <div className="Blog Project">
      {/* <header className="App-header">
      </header> */}
      <NewPost/>
      <Posts />
    </div>
  );
}

export default App;

