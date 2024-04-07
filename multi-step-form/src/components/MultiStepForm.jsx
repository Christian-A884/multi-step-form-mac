import { useContext } from 'react';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import FinalStep from './Steps/FinalStep';
import ThankYou from './Steps/ThankYou';
import { SwitchContext } from '../providers/switch.provider.jsx';

const MultiStepForm = () => {
	const { step } = useContext(SwitchContext);
	const steps = [<Step1 key={Step1}/>, <Step2 key={Step2}/>, <Step3 key={Step3}/>, <FinalStep key={FinalStep}/>,
		<ThankYou key={ThankYou}/>];
	
	return <>{steps[step]}</>;
};

export default MultiStepForm;
