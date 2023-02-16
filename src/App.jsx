import Logo from './Logo';
import Link from './Link';
import './App.css';

function App() {
    return (
        <div className="capsule-app h-screen flex flex-col">
            <header className="h-20">
                <Logo />
            </header>
            <div
                className={`
                flex
                flex-col
                justify-center
                grow
                text-white
                items-center
                `}>
                <div className='h-40 w-full flex text-center justify-center'>
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
