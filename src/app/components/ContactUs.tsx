const Contact = () => {
  const contactStyles = {
    color: 'var(--primary-white, #FFF)',
    fontFamily: 'Manrope',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '120%', /* 21.6px */
  };

  const handleContactClick = () => {
    // Lógica para manejar el clic en el botón de contacto
    console.log('Botón de contacto clickeado');
  };

  return (
    <div>
      <h1 style={contactStyles}>Contacto</h1>
      <p style={contactStyles}>Ponte en contacto con nosotros...</p>
      <button onClick={handleContactClick} style={contactStyles}>
        Contactar
      </button>
      <p style={contactStyles}>Información de contacto...</p>
    </div>
  );
}

export default Contact;

