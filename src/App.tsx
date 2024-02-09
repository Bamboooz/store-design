import React from 'react';

import { Header } from './components/header/header';
import { Item, Availability } from './components/shopitem/ShopItem';

import jeans from "./assets/jeans.jpg";
import a from "./assets/a.jpg";
import b from "./assets/b.jpg";
import c from "./assets/c.jpg";

const App: React.FC = () => {
	return (
		<div className="App">
			<Header />
			<Item
				name="Light Skinny Jeans"
				description="Discover the perfect pair of blue jeans for every occasion. Our collection features classic styles crafted from premium denim for comfort and durability. From relaxed fits to sleek silhouettes, find your go-to staple for effortless style."
				price={49.99}
				material="Light blue denim"
				sizes={{
					32: Availability.AVAILABLE,
					34: Availability.AVAILABLE,
					36: Availability.UNAVAILABLE,
					38: Availability.AVAILABLE,
					40: Availability.AVAILABLE,
					42: Availability.AVAILABLE,
					44: Availability.AVAILABLE,
					46: Availability.UNAVAILABLE,
					48: Availability.LOW,
					50: Availability.AVAILABLE,
				}}
				images={[
					<img src={jeans} alt="Product Display" />,
					<img src={a} alt="Product Display" />,
					<img src={b} alt="Product Display" />,
					<img src={c} alt="Product Display" />,
				]}
			/>
		</div>
	);
};

export default App;
