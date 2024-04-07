import thankYou from "../../assets/images/icon-thank-you.svg";
const ThankYou = () => {
  return (
    <div className="flex flex-col w-full h-auto py-[55px] justify-center items-center">
      <img src={thankYou} alt="thankYou" className="w-[56px] h-[56px]" />
      <div className="flex flex-col items-center justify-center pt-[24px] gap-[9px]">
        <h3 className="text-2xl text-denim font-bold">Thank you!</h3>
        <p className="text-center  text-grey text-base">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
