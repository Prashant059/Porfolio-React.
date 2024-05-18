import Logo from "../../assets/gif/PR.gif";
import './LogoLoader.css';

const LogoLoader = () => {
  return (
    <div className="container">
      <img className="logo animate-custom mix-blend-lighten" src={Logo} alt="logo" />
    </div>
  );
};

export default LogoLoader;