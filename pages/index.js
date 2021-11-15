import Title from "../components/Title";
import Lead from "../components/Lead";
import Spacing from "../components/Spacing";

export default function Home() {
  return (
    <div className="pb-20 mx-auto text-center md:w-8/12 lg:w-full lg:px-24">
      <Spacing className="my-8 md:my-10 lg:my-60" />
      <div className="justify-between lg:flex">
        <div className="max-w-lg border lg:w-6/12 lg:text-left">
          <Lead custom="text-xl uppercase">So, you want to travel to</Lead>
          <Title>SPACE</Title>
          <Lead>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Lead>
        </div>
        <button className="mt-20 text-2xl font-semibold tracking-widest text-black bg-white rounded-full w-44 h-44 md:w-60 md:h-60 md:text-3xl md:mt-28">
          EXPLORE
        </button>
      </div>
    </div>
  );
}
