import Logo from './Logo';
import Link from './Link';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link />  
            </header>
        </div>
    );
}

export default App;
