import ImageGallery from 'react-image-gallery';
import {useEffect} from "react";

export default function Gallery({title, images}){
	useEffect( () => console.log(images))
	return(
		<section className="gallery container">
			<h3>Guarda la nostra <span className="orange">Gallery</span></h3>
			<div className="gallery__images">
				<ImageGallery items={images} thumbnailPosition={"bottom"} disableSwipe={false} />
			</div>
		</section>
	)
}