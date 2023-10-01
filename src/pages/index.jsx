//Third party libraries
import Image from "next/image";
import Link from "next/link";

//Files in our project
import logo from "@/assets/images/logo.svg";
import iconMenu from "@/assets/images/icon-menu.svg";
import iconMenuClose from "@/assets/images/icon-menu-close.svg";
import webDesktop from "@/assets/images/image-web-3-desktop.jpg";
import webDesktopMobile from "@/assets/images/image-web-3-mobile.jpg";
import retroPcs from "@/assets/images/image-retro-pcs.jpg";
import laptops from "@/assets/images/image-top-laptops.jpg";
import gamingGrowth from "@/assets/images/image-gaming-growth.jpg";

//Relative imports
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Home - news" desc="news home page" />
      <main className="">
        <Image src={logo} alt="logo - letter w" />
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">New</Link>
            </li>
            <li>
              <Link href="/">Popular</Link>
            </li>
            <li>
              <Link href="/">Trending</Link>
            </li>
            <li>
              <Link href="/">Categories</Link>
            </li>
          </ul>
        </nav>
        <Image src={webDesktop} alt="logo - letter w" />
        <h1>The Bright Future of Web 3.0?</h1>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>Read more</button>
        <h2>New</h2>
        <h4>Hydrogen VS Electric Cars</h4>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        <h4>The Downsides of AI Artistry</h4>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <h4>Is VC Funding Drying Up?</h4>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
        <Image src={retroPcs} alt="retro computer" />
        <span>01</span>
        <h5>Reviving Retro PCs</h5>
        <p>What happens when old PCs are given modern upgrades?</p>
        <Image src={laptops} alt="keyboard computer" />
        <span>02</span>
        <h5>Top 10 Laptops of 2022</h5>
        <p>Our best picks for various needs and budgets.</p>
        <Image src={gamingGrowth} alt="keyboard computer" />
        <span>03</span>
        <h5>The Growth of Gaming</h5>
        <p>How the pandemic has sparked fresh opportunities.</p>
      </main>
    </>
  );
}
{
}
