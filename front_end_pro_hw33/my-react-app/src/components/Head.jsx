import './head.css';

const Head = () => {
    return (
        <div className='header'>
            <a className='header__logo header__menu-item'>$$$</a>
            <nav className="header__menu">
                <a className="header__menu-item">Equipment</a>
                <a className="header__menu-item">About us</a>
                <a className="header__menu-item">Blog</a>
            </nav>
        </div>

    );
}

export default Head;