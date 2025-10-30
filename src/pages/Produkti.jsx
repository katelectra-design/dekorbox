import React from "react";

const Produkti = () => {
  const boxes = [
    {
      id: 1,
      title: "Lieldienu kaste 🐣",
      image:
        "https://images.unsplash.com/photo-1617263663039-7c1b7bce38c6?auto=format&fit=crop&w=800&q=80",
      description:
        "Lieldienu kaste ir pavasara iedvesmota dāvana jūsu mājām – tajā atradīsiet gaišas krāsas olu dekoriem, zaļus un ziedošus akcentus, kā arī sveces un lina auduma detaļas, kas piešķir mājīgumu pavasara svētkos.",
      color: "bg-easter text-black",
    },
    {
      id: 2,
      title: "Ziemassvētku kaste 🎄",
      image:
        "https://images.unsplash.com/photo-1608889175119-8c3f10e7b38f?auto=format&fit=crop&w=800&q=80",
      description:
        "Ziemassvētku kaste rada svētku brīnumu ar priežu zariem, sarkanām lentēm, svecītēm un smaržīgām kanēļa nūjiņām. Katrs elements ir izvēlēts, lai piepildītu mājas ar siltumu, gaismu un svētku sajūtu.",
      color: "bg-christmas text-white",
    },
    {
      id: 3,
      title: "Helovīnu kaste 🎃",
      image:
        "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=800&q=80",
      description:
        "Helovīnu kaste piešķir jūsu mājai noslēpumainu šarmu ar oranžiem un melniem dekoriem, mazām ķirbju figūriņām, laternām un gaismām, kas radīs jautru, bet maģisku rudens atmosfēru.",
      color: "bg-halloween text-black",
    },
    {
      id: 4,
      title: "Jāņu kaste 🌼",
      image:
        "https://images.unsplash.com/photo-1592421259593-b1c5b6b2b2f9?auto=format&fit=crop&w=800&q=80",
      description:
        "Jāņu kaste ir iedvesmota no Latvijas saulgriežu tradīcijām – tajā atradīsiet ziedu vainaga elementus, dabīgas sveces, lina auduma akcentus un laukziedu motīvus, kas piešķir mājai īstu vasaras noskaņu.",
      color: "bg-midsummer text-white",
    },
  ];

  return (
    <section className="text-center">
      <h2 className="text-4xl font-bold mb-8">Mūsu produkti</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 ${box.color}`}
          >
            <img
              src={box.image}
              alt={box.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{box.title}</h3>
              <p className="leading-relaxed">{box.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produkti;
