import logo from './logo.svg';
import './Logo.css';

function Logo() {
    return (
        <img src={logo} className="App-logo max-h-full aspect-square" alt="logo" />
    );
}

export default Logo;
