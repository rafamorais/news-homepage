//Third party libraries
import Image from "next/image";

//Relative imports
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Home - news" desc="news home page" />
      <main className="">
        News Home Page
        <p className="font-inter">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          dicta, dolorum quia cupiditate dolorem tempore maiores! Quasi
          incidunt, excepturi vero ut ab tempore, aut, eum minus sapiente sunt
          ullam exercitationem!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          dicta, dolorum quia cupiditate dolorem tempore maiores! Quasi
          incidunt, excepturi vero ut ab tempore, aut, eum minus sapiente sunt
          ullam exercitationem!
        </p>
      </main>
    </>
  );
}
{
}
