// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay,} from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";


export default function Focuses({title, focuses}){
	return(
		<section className={`focuses`}>
			<h2>{title}</h2>


			<div className="container">
				<Swiper
					autoplay={{
						delay: 7000,
					}}
					loop={true}
					pagination={true}
					modules={[Pagination, Autoplay,]}
					grabCursor={true}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>

				{
					focuses.map( (focus, key) => {
						return(
							<SwiperSlide key={key}>
								<div className="focus">
									<h3 className={`text-fade`}>{focus.title}</h3>
									<p>{focus.text}</p>
								</div>
							</SwiperSlide>

							)
				})}
				</Swiper>
			</div>
		</section>
	)
}