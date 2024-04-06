import { plans } from '../../data';
import { useContext, useState } from 'react';
import { SwitchContext } from '../../providers/switch.provider';

const PlanCard = () => {
	const [selectedPlan, setSelectedPlan] = useState(plans[0]);
	const { userPlan, setUserPlan, period } = useContext(SwitchContext);
	console.log(userPlan);
	const handleClick = (plan) => {
		setSelectedPlan(plan);
		setUserPlan(plan);
	};
	
	return (
	<>
		{plans.map((plan, index) => (
		<div key={index} onClick={() => handleClick(plan)}
		className={
			selectedPlan === plan
			? 'flex items-center gap-4 w-[295px] h-[77px] pl-4 bg-very_light_grey border border-purple rounded-lg cursor-pointer'
			: 'flex items-center gap-4 w-[295px] h-[77px] pl-4  border border-ligh_grey rounded-lg cursor-pointer'
		}>
			<div>
				<img src={plan.image}/>
			</div>
			<div className="flex flex-col">
            <span className="text-base text-denim ">
              {plan.title}
            </span>
				<span className="text-sm text-grey">
              {period === 'monthly' ? `${plan.price}` : `${plan.priceYear}`}
            </span>
				<span className={period === 'monthly' ? 'hidden' : 'text-xs text-denim'}>
              2 months free
            </span>
			</div>
		</div>
		))}
	
	</>
	);
};

export default PlanCard;
