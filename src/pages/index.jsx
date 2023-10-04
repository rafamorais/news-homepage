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
      <main className="container mx-auto px-32">
        <Header />

        <div className=" grid grid-cols-3">
          <div className="col-span-2">
            <Image src={webDesktop} alt="logo - letter w" className="pr-6" />
            <div className="flex mt-8">
              <h1 className="w-[50%] pr-12 pb-4">
                The Bright Future of Web 3.0?
              </h1>
              <div className="w-[50%] flex flex-col pr-6">
                <p className="mb-4 ">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="bg-soft-red hover:bg-very-dark-blue hover:text-off-white px-6 py-[10px] mt-auto w-fit tracking-[0.2rem] track font-bold text-xs text-white font-inter uppercase">
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

        <div className="grid grid-cols-3 mt-12 mb-12">
          <div className="item-grid-gaming">
            <Image src={retroPcs} alt="retro computer" />
            <div className="pr-6">
              <span>01</span>
              <h5>Reviving Retro PCs</h5>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div className="item-grid-gaming">
            <Image src={laptops} alt="keyboard computer" />
            <div className="pr-6">
              <span>02</span>
              <h5>Top 10 Laptops of 2022</h5>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>

          <div className="item-grid-gaming">
            <Image src={gamingGrowth} alt="keyboard computer" />
            <div>
              <span>03</span>
              <h5>The Growth of Gaming</h5>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
{
}
