import VideoBG from '../components/VideoBG'
import Banner from '../components/Banner'

const bannerText = {
    title: "Lorem ipsum dolor sit amet [25]",
    text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}

export default function Index() {
  return (
    <>
        <VideoBG/>
        <Banner title={bannerText.title} text={bannerText.text} withButton />

    </>
  );
}
