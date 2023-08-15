export const NosotrosPage = () => {
  const SERVICIOS_EMPRESA = [
    "Proyectos de Obras civiles",
    "Desarrollo de Habilitaciones Urbanas",
    "Cálculos estructurales",
    "Diseño de Proyectos Arquitectónicos",
    `Brindamos servicios especializados
    (estructuras, instalaciones eléctricas, instalaciones sanitarias)`,
    "Refacción de viviendas",
    "Refuerzos y diagnósticos estructurales en general",
    "Asesoría y gestión inmobiliaria",
    "Asesoramiento financiero y legal",
  ];

  return (
    <section className="flex flex-col m-5 text-white">
      <h1 className="text-xl font-semibold mb-3">¿Quienes somos?</h1>
      <p className="text-center font-thin">
        Somos una empresa comprometida en la satisfacción de las necesidades de
        diseño y construcción de nuestros clientes, proponiendo soluciones no
        solo viables y confiables, sino de calidad y al mejor precio; todo ello
        con la finalidad de que el usuario obtenga el mejor provecho en su
        inversión, dentro de un marco de transparencia, solidez y calidad que
        fomentamos a través de nuestra cultura de servicio, desarrollando y
        motivando a nuestros colaboradores, que por cierto son un equipo de
        profesionales altamente calificados en las variadas especialidades en el
        ámbito ingenieril y en el ramo dela construcción. ANTECEDENTES NORICA
        S.R.L. es el resultado de una actividad empresarial iniciada el año 2006
        a partir de un esfuerzo de sus socios por satisfacer las demandas de
        tipo familiar, en el diseño, elaboración y ejecución de viviendas de
        nivel social medio y residencial; que ha llegado a constituirse en una
        empresa con 17 años de experiencia en el ramo de la construcción
        compitiendo exitosamente a través de la calidad de sus construcciones
        con los mejores precios del mercado, ampliando la oferta de servicio que
        ofrece y desarrollando proyectos desde su concepción hasta su
        comercialización, con experiencia suficiente para atender con capacidad
        de gestión, solvencia técnica, y gran capital humano los requerimientos
        de nuestros clientes.
      </p>
      <p className="font-bold mt-5 mb-3">¿QUE OFRECEMOS?</p>
      <ul>
        {SERVICIOS_EMPRESA.map((item) => (
          <li className="m-3 font-thin" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};
