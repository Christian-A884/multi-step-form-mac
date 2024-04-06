import classNames from 'classnames';
import { useContext } from 'react';
import { SwitchContext } from '../../providers/switch.provider';

function Switch() {
	const { period, setPeriod } = useContext(SwitchContext);
	
	const handleTogglePeriod = () => {
		setPeriod((currentPeriod) => {
			if (currentPeriod === 'monthly') return 'yearly';
			else return 'monthly';
		});
	};
	
	return (
	<div
	onClick={handleTogglePeriod}
	className="flex w-11 h-6 bg-denim rounded-full cursor-pointer"
	>
      <span
      className={`  h-4 w-4 mt-1 ml-1 bg-white rounded-full transition-all duration-500 shadow-2xl ${period === 'monthly' ? '' : 'ml-6'}    `}
      ></span>
	</div>
	);
}

export default Switch;
