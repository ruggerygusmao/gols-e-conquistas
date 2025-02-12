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
    { name: "Ruggery", imageSrc: "https://media-for2-2.cdn.whatsapp.net/v/t61.24694-24/469469571_567517312844715_1921183239204951099_n.jpg?ccb=11-4&oh=01_Q5AaIFgl8TE1QeKqBSkwuwwwB80kOghRiX3tHAThkZxRoYkq&oe=67B99C6D&_nc_sid=5e03e0&_nc_cat=110" },
    {
      name: "Rayane",
      imageSrc:
        "https://media-for2-2.cdn.whatsapp.net/v/t61.24694-24/473397535_1770631127058909_4954110672595243093_n.jpg?ccb=11-4&oh=01_Q5AaIIdjyIcQyQ728NYNLoq3lhcsVvkLtdwvOtivLTvzDBGL&oe=67B9B038&_nc_sid=5e03e0&_nc_cat=104",
    },
    {
      name: "Chrislayne",
      imageSrc:
        "https://media-for2-1.cdn.whatsapp.net/v/t61.24694-24/473399283_1121854925735993_1340797915835306611_n.jpg?ccb=11-4&oh=01_Q5AaIOELEhNfMvICIMapGVjY4_PEQubuAAFQhi2SnNFR44aO&oe=67B9B8BD&_nc_sid=5e03e0&_nc_cat=105",
    },
    {
      name: "Marcela",
      imageSrc:
        "https://media-for2-1.cdn.whatsapp.net/v/t61.24694-24/429912958_2447807645389421_509776280962281990_n.jpg?ccb=11-4&oh=01_Q5AaIPcX5GNIMHPrBGsW_UYyJrUcT8wHR4RavyIwieCu3fOI&oe=67B9CB2D&_nc_sid=5e03e0&_nc_cat=107",
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
