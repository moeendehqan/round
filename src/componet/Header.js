const Header = () => {

    return(
        <div className="Header">
            <div className="Lft">
                <img src="/icon/logo.png"/>
                <h1>رند بورس</h1>
            </div>
            <div className="Cnt">
                <input placeholder="جــسـتـجـــو"></input>
            </div>
            <div className="Rgt">
                <button>ورود/ ثبت نام</button>
            </div>
        </div>
    )
}

export default Header