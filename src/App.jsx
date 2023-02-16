import Logo from './Logo';
import Link from './Link';
import './App.css';

function App() {
    return (
        <div className="capsule-app">
            <header className="logo-container-header">
                <Logo />
            </header>
            <div className="main-container">
                <div className='logo-container-main'>
                    <Logo />
                </div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link />
            </div>
        </div>
    );
}

export default App;
