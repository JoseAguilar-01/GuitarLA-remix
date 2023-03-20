import Navigation from '../Navigation';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer_navigation'>
        <Navigation />

        <p className='copyright'>
          Todos los derechos reservados {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
