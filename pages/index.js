import Container from "../components/Container";
import { ContainerItem } from "../components/Container";
import Spacing from "../components/Spacing";

export default function Home() {
  return (
    <div>
      <Spacing className="my-10 lg:my-64" />
      <Container>
        <ContainerItem>
          <div className="max-w-md border border-green-600 ">
            <h1 className="mb-8 tracking-wide uppercase md:text-2x lg:text-3xl">
              So you want to travel to
            </h1>
            <span className="tracking-widest uppercase text-7xl xl:text-9xl font-barlow">
              Space
            </span>
            <p className="my-8 ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </ContainerItem>
        <ContainerItem>
          <button className="my-16 text-2xl font-semibold tracking-widest text-black bg-white rounded-full w-44 h-44 md:w-60 md:h-60 md:text-3xl md:mt-28">
            EXPLORE
          </button>
        </ContainerItem>
      </Container>
    </div>
  );
}
