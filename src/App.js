import Navbar from './components/Navbar';
import PostSection from './components/PostSection';
import './App.css';
import {useState} from "react"

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  return (
    <div className="App">
      <Navbar />
      <main>
        <PostSection />
      </main>
    </div>
  );
}

export default App;
