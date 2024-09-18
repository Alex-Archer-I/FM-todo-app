const Header = ({theme}) => {
    let themeClass;

    if (theme === 'dark') {
        themeClass = 'header__switch--dark';
    } else {
        themeClass = 'header__switch--light';
    };

    return (
        <header className="header">
            <h1 className="header__logo">Todo</h1>
            <button className={`header__switch ${themeClass}`}></button>
        </header>
    );
};

export default Header;