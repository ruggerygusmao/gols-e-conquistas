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
        "https://media-for2-2.cdn.whatsapp.net/v/t61.24694-24/455158393_1192242188539852_8846478617552128522_n.jpg?ccb=11-4&oh=01_Q5AaIDif5OgIQvxlmFrHwfvv58ZkBPZ2jlhBWxxiaWHgQKKd&oe=6731A6A7&_nc_sid=5e03e0&_nc_cat=107",
    },
    {
      name: "Vinicius",
      imageSrc:
        "https://media-for2-2.cdn.whatsapp.net/v/t61.24694-24/462790092_3767622536821991_1741995600321484957_n.jpg?ccb=11-4&oh=01_Q5AaIEN3hQYC4EXQdcMSTQia9xIcy6jju053xn-OMVsEBTMf&oe=673237F1&_nc_sid=5e03e0&_nc_cat=102",
    },
    {
      name: "Isabely",
      imageSrc:
        "https://media-for2-2.cdn.whatsapp.net/v/t61.24694-24/462790092_3767622536821991_1741995600321484957_n.jpg?ccb=11-4&oh=01_Q5AaIEN3hQYC4EXQdcMSTQia9xIcy6jju053xn-OMVsEBTMf&oe=673237F1&_nc_sid=5e03e0&_nc_cat=102",
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
