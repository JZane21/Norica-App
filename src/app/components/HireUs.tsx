import { Link } from 'react-router-dom';

const hireUsStyles = {
  color: 'var(--primary-white, #FFF)',
  fontFamily: 'Manrope',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '120%', /* 21.6px */
  display: 'flex',
  height: '61px',
  padding: '24px 40px 24px 48px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  borderRadius: '16px',
  background: '#FF001D',
  cursor: 'pointer', // Agregar cursor apuntador al botón
  textDecoration: 'none', // Eliminar subrayado del enlace
};

function HireUs() {
  return (
    <Link to="/contacto" style={hireUsStyles}>
      <h1>Contrátanos</h1>
      <p>Puedes contratar nuestros servicios...</p>
      <p>Ir al formulario de contratación</p>
    </Link>
  );
}

export default HireUs;