import arcadeImg from './assets/images/icon-arcade.svg';
import advancedImg from './assets/images/icon-advanced.svg';
import proImg from './assets/images/icon-pro.svg';

export const plans = [
	{ image: arcadeImg, title: 'Arcade', price: '$9/mo', priceYear: '$90/yr' },
	
	{ image: advancedImg, title: 'Advanced', price: '$12/mo', priceYear: '$120/yr' },
	
	{ image: proImg, title: 'Pro', price: '$15/mo', priceYear: '$150/yr' }
];

export const addOns = [
	{
		title: 'Online service',
		details: 'Acces multiplayer games',
		monthlyPrice: 1
	},
	{
		title: 'Larger storage',
		details: 'Extra 1TB cloud save',
		monthlyPrice: 2
	},
	{
		title: 'Customizable profile',
		details: 'Custom theme on your profile',
		monthlyPrice: 2
		
	}
];
console.log(addOns.map((addOpt) => addOpt));