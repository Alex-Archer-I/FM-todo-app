const Header = ({theme, changeTheme}) => {
    let themeClass;

    if (theme === 'dark') {
        themeClass = 'header__switch--dark';
    } else {
        themeClass = 'header__switch--light';
    };

    const clickHandler = () => {
        changeTheme();
    };

    return (
        <header className="header">
            <h1 className="header__logo">Todo</h1>
            <button className={`header__switch ${themeClass}`} onClick={clickHandler}></button>
        </header>
    );
};

export default Header;