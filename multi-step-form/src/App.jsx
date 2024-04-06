import MultiStepForm from './components/MultiStepForm.jsx';
import { SwitchContext } from './providers/switch.provider.jsx';
import VerticalSideBar from './components/VerticalSideBar/VerticalSideBar.jsx';
import { useEffect, useState } from 'react';
import { plans } from './data.js';

function App() {
	const [step, setStep] = useState(0);
	const [period, setPeriod] = useState('monthly');
	const [userPlan, setUserPlan] = useState(plans[0]);
	
	const [addonOptions, setAddonOptions] = useState({
		'Online service': false,
		'Larger storage': false,
		'Customizable profile': false
	});
	
	const [addonOptionsPlanPrice, setAddonOptionsPlanPrice] = useState({
		'Online service': 0,
		'Larger storage': 0,
		'Customizable profile': 0
	});
	
	useEffect(() => {
		// let addOnOptionsCalc;
		// if(period === "monthly")
		// 	for(const addOn in addonOptions) {
		// 		return {
		// 			addon === true ?
		// 		}
		//
		// 	}
		//
		// 	})
		//
		//
		
	}, [period, userPlan, addonOptions, setAddonOptions]);
	
	return (
	<section className="flex flex-col relative h-[695px] w-[375px] bg-body_bg_color font-ubuntu">
		<SwitchContext.Provider
		value={{ period, setPeriod, step, setStep, userPlan, setUserPlan, addonOptions, setAddonOptions }}>
			<VerticalSideBar/>
			
			<div
			className="flex flex-col absolute top-[102px] px-6 py-8 mx-4 gap-4 bg-[white] w-[343px] h-auto shadow-md rounded-xl">
				
				<MultiStepForm/>
			
			</div>
			<div className="flex absolute items-center bottom-0 h-[72px] w-[375px] justify-between px-4 bg-[white]">
				{step > 0 && step < 4 ? (
				<button
				className="text-grey text-sm"
				onClick={() => setStep(step - 1)}
				>
					Go back
				</button>
				) : (
				<div></div>
				)}
				{step < 3 ?
				(<button
				className="text-[white] text-sm bg-denim w-[97] h-10 px-4 rounded-md"
				onClick={() => setStep(step + 1)}
				>
					Next step
				</button>) : null} {step >= 3 && step < 4 ?
			(<button className="text-sm text-[white] bg-purple h-10 w-[97] px-4 rounded-md"
			onClick={() => setStep(step + 1)}>
				Confirm
			</button>) : null}
			
			</div>
		</SwitchContext.Provider>
	</section>
	);
}

export default App;
