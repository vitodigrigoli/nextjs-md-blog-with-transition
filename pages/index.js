import VideoBG from '../components/VideoBG'
import Banner from '../components/Banner'
import VerticalSlider from "../components/VerticalSlider";
import Post from "../components/Post"
import img from "../public/referal.jpg"
import Posts from "../components/Posts";


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

export default function Index() {
  return (
    <>
        <VideoBG/>
        <Banner title={bannerText.title} text={bannerText.text} withButton />
        <VerticalSlider title={verticalSliderText.title} text={verticalSliderText.text} withButton />
        <Posts />
        <Banner title={bannerText.title} text={bannerText.text} withButton />
        <Banner title={bannerText.title} text={bannerText.text} withButton />

    </>
  );
}
