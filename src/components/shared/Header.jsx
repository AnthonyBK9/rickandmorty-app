import images from '../../assets/js/images'
import './style/header.css'

const Header = ({dimension}) => {

  return (
    <header className="header">
        <img src={images[0].img} alt={images[0].title} className="header-img"/>
        <article>
            <h2 className="app-title">{dimension?.name}</h2>
            <div className="header__dimension">
                <div className="header__dimension-section">
                    <p><span>Type:</span> {dimension?.type}</p>
                </div>
                <div className="header__dimension-section">
                    <p><span>Dimension:</span> {dimension?.dimension}</p>
                </div>
                <div className="header__dimension-section">
                    <p><span>Population:</span> {dimension?.residents?.length}</p>
                </div>
            </div>
        </article>
    </header>
  )
}

export default Header