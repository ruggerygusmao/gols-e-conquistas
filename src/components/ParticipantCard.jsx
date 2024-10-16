import React from "react";

const ParticipantCard = ({ name, imageSrc }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imageSrc}
        alt={name}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-md"
      />
      <p className="mt-4 text-lg font-semibold">{name}</p>
    </div>
  );
};

const Participants = () => {
  const participants = [
    { name: "Ruggery", imageSrc: "https://github.com/ruggerygusmao.png" },
    {
      name: "Rayane",
      imageSrc:
        "https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/323819736_522114254107349_6344785853539912047_n.jpg?ccb=11-4&oh=01_Q5AaIFHfUitXj-KKsBYGrtJ0VTfjDew3Fl4Qksk8_WjPaWu7&oe=671D1815&_nc_sid=5e03e0&_nc_cat=102",
    },
    {
      name: "Vinicius",
      imageSrc:
        "https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/462790092_3767622536821991_1741995600321484957_n.jpg?ccb=11-4&oh=01_Q5AaIBG0vWfeldOfmo7INaUkRuQZDGmqUKuBxCOZKH-ZuHyz&oe=671CE7B1&_nc_sid=5e03e0&_nc_cat=102",
    },
    {
      name: "Isabely",
      imageSrc:
        "https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/462790092_3767622536821991_1741995600321484957_n.jpg?ccb=11-4&oh=01_Q5AaIBG0vWfeldOfmo7INaUkRuQZDGmqUKuBxCOZKH-ZuHyz&oe=671CE7B1&_nc_sid=5e03e0&_nc_cat=102",
    },
  ];

  return (
    <div className="p-6 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-6">Participantes da Viagem</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {participants.map((participant) => (
          <ParticipantCard
            key={participant.name}
            name={participant.name}
            imageSrc={participant.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Participants;
