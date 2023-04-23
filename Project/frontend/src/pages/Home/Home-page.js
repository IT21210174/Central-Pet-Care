import React from "react";
import "./Home-page.scss";
// picture importings
import HeroImage from "../Inventory/imgs/hero-sec-image/hero-image.jpg";
import logo from "../../pages/Inventory/imgs/hero-sec-image/logo-v2.png";
import homeImg2 from "../../pages/Inventory/imgs/hero-sec-image/row-1-pic.jpg";
import ServiceBack from "../../pages/Inventory/imgs/hero-sec-image/services.png";
import LastPic from "../../pages/Inventory/imgs/hero-sec-image/last-pic.jpg";
// component importings
import Header from "../../components/header/header";

function HomePage() {
	return (
		<div className="home-page-container">
			{/* header section */}

			{/* hero section */}
			<div className="hero-picture">
				<Header />
				<img src={HeroImage} alt="" className="hero-sec-image" />
				<div className="hero-overlay"></div>
				<div className="welcome-container">
					<div className="text-container">
						<div className="welcome-text">
							Care for your <br /> friend{" "}
						</div>
						<div className="welcome-text-body">
							We are dedicated to provide <br />
							excellent care.
							<br />
							Call today to schedule an appointment
						</div>
						<div className="welcome-sec-button">
							<button className="schedule-appt-btn">
								schedule appointment
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* body section */}
			<div className="first-section-home">
				<div className="company-message">
					<div className="text-section">
						<img src={logo} alt="" className="watermark-logo" />
						<div className="message">
							<span className="message-topic">
								Your pet is your family
							</span>
							<span className="message-body">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Dolorum, dignissimos? Lorem,
								ipsum dolor sit amet consectetur adipisicing
								elit. Dolorum, dignissimos? Lorem, ipsum dolor
								sit amet consectetur adipisicing elit. Dolorum,
								dignissimos? Lorem, ipsum dolor sit amet
								consectetur adipisicing elit. Dolorum,
								dignissimos?
							</span>
						</div>
					</div>
					<img src={homeImg2} alt="" className="image-section" />
					<div className="color-column"></div>
				</div>
			</div>

			{/* discount row */}
			<div className="discount-container">
				<span className="discount">
					20% discount on every friday to any treatment.
				</span>
			</div>

			<div className="our-message">
				<div className="topic-container">
					<span className="topic">Who we are</span>
					<span className="line"></span>
				</div>

				<span className="our-message-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolore deleniti iusto, vitae quas ea voluptatum omnis
					nesciunt libero quisquam molestias! Voluptas quasi soluta
					quod enim.lorem40 Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Non, omnis doloremque possimus aperiam
					architecto officiis maiores unde veritatis nemo enim aut
					impedit esse commodi eveniet aliquid pariatur similique
					voluptatibus praesentium, culpa, accusantium illum quasi.
					Reiciendis aperiam officiis corrupti rerum accusamus?
				</span>
			</div>

			{/* services section */}
			<div className="service-container">
				<img src={ServiceBack} className="service-background" />
				<div className="service-overlay"></div>
			</div>

			{/* last card */}
			<div className="company-message">
				<div className="color-column"></div>
				<img src={LastPic} alt="" className="image-section" />
				<div className="text-section-last">
					<img src={logo} alt="" className="watermark-logo-last" />
					<div className="message">
						<span className="message-topic">
							Your pet is your family
						</span>
						<span className="message-body">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Dolorum, dignissimos? Lorem, ipsum dolor sit
							amet consectetur adipisicing elit. Dolorum,
							dignissimos? Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Dolorum, dignissimos? Lorem, ipsum
							dolor sit amet consectetur adipisicing elit.
							Dolorum, dignissimos?
						</span>
					</div>
				</div>
			</div>

			{/* footer section */}
		</div>
	);
}

export default HomePage;
