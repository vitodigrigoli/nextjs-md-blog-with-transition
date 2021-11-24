

export default function VideoBG(){
	return(
		<header className="video">
			<div className="container">
				<div className="video__text">
					<h1 >Lorem ipsum dolor <span className="orange">sit amet</span></h1>
					<p className="dash dash--yellow">Maecenas viverra mi a elit lacinia, molestie varius dolor semper. Sed sit amet ligula sapien, onec vehicula sed ligula eu placerat ut vestibulum rutrum</p>
				</div>
			</div>

			<div className="video__bg">
				<video id="video-bg" preload="auto" loop="loop" muted autoPlay>
					<source src='Loop_v2_LQ.mp4' type="video/mp4"/>
				</video>
			</div>


		</header>
	)
}