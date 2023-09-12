

export const BuyForm = () => {

    const STYLES_ON_CLASSNAME = `
    w-full p-3 text-black shadow-lg text-base
    bg-gray-100 outline-none rounded-2xl text-start
  `;

return (
    <section>
<div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2">
  Nombre:
</label>
<input
  type="text"
  id="name"
  name="name"
  className={STYLES_ON_CLASSNAME}
  placeholder="Escribe tu nombre"
/>
</div>
<div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2">
  E-mail:
</label>
<input
  type="text"
  id="email"
  name="email"
  className={STYLES_ON_CLASSNAME}
  placeholder="Escribe tu dirección de e-mail"
/>
</div>
<div className="mb-4">
<label  className=" block text-gray-700 text-sm font-bold mb-2">
  Dirección de entrega:
</label>
<textarea
  id="address"
  name="address"
  className={STYLES_ON_CLASSNAME}
  placeholder="Escribe tu dirección de entrega"
></textarea>
</div>
<span className="flex flex-row justify-between">
<div className="mb-4">
<label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
  Teléfono de contacto:
</label>
<input
  type="text"
  id="phone"
  name="phone"
  className={STYLES_ON_CLASSNAME}
  placeholder="Teléfono de contacto"
/>
</div>
<div className="mb-4">
<label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">
  NIT
</label>
<input
  type="text"
  id="nit"
  name="nit"
  className={STYLES_ON_CLASSNAME}
  placeholder="Datos para la factura"
/>
</div>
</span>
</section>
);
};