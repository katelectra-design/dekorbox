import React from "react";

const products = [
  {
    title: "Lieldienu kaste",
    description:
      "Pavasara prieka pilna Lieldienu kaste ar krāsainām olām, trausliem porcelāna trušiem un rotaļīgu svētku virteni. Ideāli piemērota mājas rotāšanai un svētku noskaņas radīšanai.",
    image: "/images/lieldienu-kaste.jpg",
  },
  {
    title: "Ziemassvētku kaste",
    description:
      "Sirsnīga Ziemassvētku kaste ar eglītes rotājumiem, svecēm, zelta un sarkaniem akcentiem un mazu svētku eglīti. Rada īstu ziemas brīnuma sajūtu jūsu mājās.",
    image: "/images/ziemassvetku-kaste.jpg",
  },
  {
    title: "Helovīnu kaste",
    description:
      "Tumši oranža un melna Helovīnu kaste ar miniatūrām ķirbjiem, sikspārņiem un gaismām — ideāla, lai radītu noslēpumainu svētku atmosfēru.",
    image: "/images/helovinu-kaste.jpg",
  },
  {
    title: "Jāņu kaste",
    description:
      "Dabiska Jāņu kaste ar ziedu vainagu, lina maisiņiem, ozollapām un keramisku vāzi ar florālu rakstu. Nes mājās Jāņu nakts siltumu un latvisko sajūtu.",
    image: "/images/janu-kaste.jpg",
  },
];

export default function Produkti() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-800">
        Mūsu sezonālās kastes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-green-900">
                {product.title}
              </h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

