import Container from "../components/Container";
import { ContainerItem } from "../components/Container";
import Spacing from "../components/Spacing";
import { motion } from "framer-motion";

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
            <span className="tracking-widest text-gray-100 uppercase text-7xl xl:text-9xl font-barlow">
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
          <motion.button
            whileHover={{
              scale: 1.2,
              color: "#929292",
              transition: {
                yoyo: Infinity,
                duration: 0.4,
              },
            }}
            whileTap={{ scale: 0.8 }}
            className="my-16 text-2xl font-semibold tracking-widest text-black bg-white rounded-full w-44 h-44 md:w-60 md:h-60 md:text-3xl md:mt-28 "
          >
            EXPLORE
          </motion.button>
        </ContainerItem>
      </Container>
    </div>
  );
}
