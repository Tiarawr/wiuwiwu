import AnimatedContent from "./components/AnimatedContent";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[rgba(244,236,236,0.13)] to-[#9D8A8A] via-transparent overflow-hidden pt-[100px]">
      {/* Welcome Text */}
      <div className="w-full flex justify-center">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={100}
        >
          <h1 className="text-[40px] font-semibold capitalize font-poppins text-black text-center">
            Welcome to{" "}
            <span className="text-[#B56868] font-bold">checkmykicks</span>
          </h1>
        </AnimatedContent>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center mt-8">
        <AnimatedContent
          distance={100}
          direction="vertical"
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1.05}
          threshold={0.1}
          delay={300}
        >
          <img
            src="/sepatu.png"
            alt="hero"
            className="w-full max-w-[700px] h-auto object-contain"
          />
        </AnimatedContent>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-4">
        <button className="w-[201px] h-[69px] bg-[#B56868] text-white font-open font-bold text-[18px] uppercase tracking-[0.17em] rounded-full flex items-center justify-center">
          Check Now
        </button>
      </div>
    </div>
  );
}
