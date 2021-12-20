import VideoBG from '../components/VideoBG'
import Banner from '../components/Banner'
import VerticalSlider from "../components/VerticalSlider";
import HorizontalSlider from "../components/HorizontalSlider";
import Posts from "../components/Posts";
import img from "../public/referal.jpg";
import {Head} from "next/document";
import Footer from "../components/Footer";


const bannerText = {
    title: "Lorem ipsum dolor sit amet [25]",
    text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}

const verticalSliderText = {
  title: 'Lorem ipsum dolor <span class="orange">sit amet</span> [25]',
  text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}

const postText = {
  title: 'Lorem ipsum dolor <span class="yellow">sit amet</span> [25]',
  text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}

const posts = [
  {
    title: 'Lorem ipsum dolor <span class="yellow">sit amet Teatro</span> [25]',
    text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]",
    img: img,
    link: "/teatro"
  },

  {
    title: 'Lorem ipsum dolor <span class="yellow">sit amet Sport</span> [25]',
    text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]",
    link: "/teatro",
    img: img,
  },

  {
    title: 'Lorem ipsum dolor <span class="yellow">sit amet Festival</span> [25]',
    text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]",
    link: "/teatro",
    img: img,
  },
];

const horizontalSliderText = {
  title: 'Lorem ipsum dolor sit amet25]',
  text: 'Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [150]',
  slides: [
    {
      title: "Laboratorio #1",
      text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [150]"
    },
    {
      title: "Laboratorio #2",
      text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [150]"
    },
    {
      title: "Laboratorio #3",
      text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [150]"
    },
    {
      title: "Laboratorio #4",
      text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [150]"
    },
  ]
}

export default function Index() {
  return (
    <>
        <VideoBG/>
        <Banner title={bannerText.title} text={bannerText.text} withButton />
        <VerticalSlider title={verticalSliderText.title} text={verticalSliderText.text} withButton />
        <Posts posts={posts}/>
      <HorizontalSlider title={horizontalSliderText.title}  slides={horizontalSliderText.slides}/>
        <VerticalSlider title={verticalSliderText.title} text={verticalSliderText.text} withButton />
        <Banner title={bannerText.title} text={bannerText.text} withButton />
        <Footer/>

    </>
  );
}
