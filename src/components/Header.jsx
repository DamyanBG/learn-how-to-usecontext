import "./Header.css"

const Header = ({ setIsCartOpen }) => {
    const handleOnCartClick = () => {
        setIsCartOpen((isCartOpen) => !isCartOpen)
    }

    return (
        <header>
            <h2>E-COMMERCE</h2>
            <article className="cart-link-container">
                <button type="button" onClick={handleOnCartClick}>
                    &#128722;
                </button>
            </article>
        </header>
    );
};

export default Header;
