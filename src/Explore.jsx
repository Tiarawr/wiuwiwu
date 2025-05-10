export default function Explore() {
  const shoes = [
    {
      name: "Air Jordan 4",
      image: "a-0-f-9-c-159-cd-2-ac-60-a-47-c-8846-e-0-c-8-a-07.png",
      status: "PASS",
    },
    {
      name: "Yeezy 350 v2 zebra",
      image: "bf-16-d-13-a-54-b-325903-ced-3-a-49-f-3-ffaa-8-e.png",
      status: "NOT PASS",
    },
    {
      name: "Yeezy Boost",
      image: "https://placehold.co/250x250",
      status: "PASS",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8 pt-[100px]">
      {/* Title */}
      <h2 className="text-[64px] leading-[89.15px] font-poppins font-semibold text-center">
        <span className="text-black">Explore </span>
        <span className="text-[#46ADAC]">What WE Checked</span>
      </h2>

      {/* Card Container */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {shoes.map((shoe, index) => (
          <div
            key={index}
            className="w-72 h-96 bg-white rounded-[20px] border border-zinc-300 flex flex-col items-center gap-4 p-4"
          >
            <img
              src={shoe.image}
              alt={shoe.name}
              className="w-[250px] h-[250px] object-cover"
            />
            <div className="text-[#444343] text-[20px] font-semibold font-open">
              {shoe.name}
            </div>
            <div
              className={`px-6 py-2 rounded-[20px] ${
                shoe.status === "PASS" ? "bg-[#5CC98D]" : "bg-[#E06262]"
              }`}
            >
              <span className="text-[#FAFAFA] text-[20px] font-bold font-open tracking-[0.02em]">
                {shoe.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
