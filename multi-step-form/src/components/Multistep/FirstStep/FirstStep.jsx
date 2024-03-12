import { useContext, useRef, useEffect } from "react";
import { MultistepContext } from "../../../providers/multistep.provider";
import "./FirstStep.css";

const FirstStep = () => {
  const { step, userData, setUserData } = useContext(MultistepContext);
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  useEffect(() => {
    setUserData({
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
    });
  }, [step]);

  return (
    <div className="first-step">
      <div className="first-step-title">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address and phone number</p>
      </div>
      <div className="first-step-form">
        <label htmlFor="name">Name</label>
        <input name="name" placeholder="Name" ref={name} type="text" />
        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          placeholder="Email Address"
          ref={email}
          type="text"
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          name="phone"
          placeholder="Phone Number"
          ref={phone}
          type="text"
        />
      </div>
    </div>
  );
};

export default FirstStep;
