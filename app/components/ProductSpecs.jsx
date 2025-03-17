export default function ProductSpecs({ product }) {
  const specificationsList = [
    { label: "Marca", key: "brand" },
    { label: "Nombre", key: "name" },
    { label: "Descripción", key: "description" },
    { label: "Bateria", key: "specs.battery" },
    { label: "OS", key: "specs.os" },
    { label: "Procesador", key: "specs.processor" },
    { label: "Resolución", key: "specs.resolution" },
    { label: "Pantalla", key: "specs.screen" },
    { label: "Refresco de pantalla", key: "specs.screenRefreshRate" },
    { label: "Camara selfie", key: "specs.selfieCamera" },
  ];

  const getValue = (obj, path) => {
    try {
      return path.split(".").reduce((acc, key) => acc[key], obj);
    } catch (error) {
      return null;
    }
  };

  return (
    <div className="specifications">
      <h2 className="specifications__title">ESPECIFICACIONES</h2>
      <div className="specifications__table">
        {specificationsList.map((spec) => (
          <div className="specifications__row" key={spec.label}>
            <div className="specifications__label">{spec.label}</div>
            <div className="specifications__value">
              {getValue(product, spec.key) || "N/A"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}