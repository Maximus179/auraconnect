import { useHistory } from "react-router-dom";
import shortid from "shortid";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animation.css';
import './style.css';

const content = [
	{
		title: 'Aura Connect: Always Connecting',
		description:
		'It is your call to initiate the call. Make every call count, and enjoy togetherness, spread joy, meet your loved ones.',
		button: 'New URL',
		image: 'https://i.imgur.com/ZXBtVw7.jpg',
	},
	{
		title: 'Aura Connect: Building Communication',
		description:
		'Communication is often the key. Lets start today and communicate, meet, interact. You will always cherish the time spent with your loved ones.',
		button: 'New URL ',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
	},
	{
		title: 'Aura Connect: Above and Beyond The Call',
		description:
		'Join us today, become a part of not just a video calling service but also a part of our family. We believe in keeping you connected always.',
		button: 'New URL',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
	}
];

const Home = () => {

	const history = useHistory();

	const startCall = () => {
	  const uid = shortid.generate();
	  history.push(`/meet/${uid}#init`);
	};

    return(
        <>
        <Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button onClick={startCall}>{item.button}</button>
					</div>
				</div>
			))}
		</Slider>
        </>
    )
};

export default Home;