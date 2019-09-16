import "./Header.scss";

const Header = props => (
  <div className="Header" /*style={headerStyle}*/>
    { props.appTitle }
    {/* <style jsx>
      {`
       background-color: blue;
       color: white;
       width: 100%;
       height: 50px;
      `}
    </style> */}
  </div>
);

export default Header;