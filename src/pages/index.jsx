//Third party libraries
import Image from "next/image";

//Files in our project
import iconMenu from "@/assets/images/icon-menu.svg";
import iconMenuClose from "@/assets/images/icon-menu-close.svg";
import webDesktop from "@/assets/images/image-web-3-desktop.jpg";
import webDesktopMobile from "@/assets/images/image-web-3-mobile.jpg";
import retroPcs from "@/assets/images/image-retro-pcs.jpg";
import laptops from "@/assets/images/image-top-laptops.jpg";
import gamingGrowth from "@/assets/images/image-gaming-growth.jpg";

//Relative imports
import Seo from "@/components/Seo";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Seo title="Home - news" desc="news home page" />
      <main className="container mx-auto md:px-4 px-2">
        <Header />

        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-2 mb-10 md:mb-0">
            <Image
              src={webDesktop}
              alt="logo - letter w"
              className="md:pr-6 hidden md:block"
            />
            <Image
              src={webDesktopMobile}
              alt="logo - letter w"
              className="md:pr-6 md:hidden"
            />
            <div className="flex flex-col lg:flex-row mt-8">
              <h1 className="basis-1/2 pb-4">
                The Bright <br /> Future of Web 3.0?
              </h1>
              <div className="basis-1/2 flex flex-col md:pr-6 justify-start">
                <p className="mb-4 ">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="bg-soft-red mt-auto hover:bg-very-dark-blue hover:text-off-white px-6 py-[10px] w-fit tracking-[0.2rem] track font-bold text-xs text-white font-inter uppercase">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-very-dark-blue px-5 pt-6 pb-5">
            <h2>New</h2>
            <div className="pt-7">
              <div className="item-new-section">
                <h3>Hydrogen VS Electric Cars</h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </div>

              <div className="item-new-section">
                <h3>The Downsides of AI Artistry</h3>
                <p>
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </div>

              <div className="">
                <h3>Is VC Funding Drying Up?</h3>
                <p className="text-grayish-blue mt-2">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="gaming grid lg:grid-cols-3 grid-cols-1 gap-y-3 mt-14 mb-12">
          <div className="gaming-info">
            <Image src={retroPcs} alt="retro computer" />
            <div className="pr-2 lg:pr-6">
              <span className="">01</span>
              <h5 className="">Reviving Retro PCs</h5>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div className="gaming-info">
            <Image src={laptops} alt="keyboard computer" />
            <div className="pr-2 lg:pr-6">
              <span className="">02</span>
              <h5 className="">Top 10 Laptops of 2022</h5>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>

          <div className="gaming-info">
            <Image src={gamingGrowth} alt="keyboard computer" />
            <div>
              <span className="">03</span>
              <h5 className="">The Growth of Gaming</h5>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
