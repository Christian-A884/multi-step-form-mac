import {useForm} from 'react-hook-form';

const Step1 = () => {
  
  const {register, handleSubmit, formState: {errors}} = useForm({ mode: 'onChange' })
  
  const onSubmit = () => {}
  
  const onError = () => {}
  
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-denim">Personal info</h1>
        <p className="text-base text-grey">
          Please provide your name, email address and phone number
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="flex justify-between">
            
            <label className="text-xs font-normal text-denim" htmlFor="name">
              Name
            </label>
            
            {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
          
          </div>
          
          <input
          className="border rounded border-light_grey h-10 placeholder-grey-400 p-4 text-sm"
            name="name"
            placeholder="e.g Stephen King"
            type="text"
          {...register("name", { required: "Introdu ceva", minLength: { value: 4, message: "Numele tau e prea scurt" } })}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            
            <label className="text-xs font-normal text-denim" htmlFor="email">
              Email address
            </label>
            
            {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
          
          </div>
          <input
          className="border rounded border-light_grey h-10 placeholder-grey-400 p-4 text-sm"
          name="email"
          placeholder="e.g stephenking@lorem.com"
          type="email"
          {...register('email', { required: 'Adresa de email este invalida' })}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between">
            
            <label className="text-xs font-normal text-denim" htmlFor="phone">
              Phone number
            </label>
            
            {errors.phone && <span className="text-red-600 text-sm">{errors.phone.message}</span>}
          
          </div>
          <input
          className="border rounded border-light_grey h-10 placeholder-grey-40 px-4 text-sm"
          name="phone"
          placeholder="e.g. +1 234 5678 90"
          type="text"
          {...register('phone', { required: 'Introdu numarul tau de telefon' })}
          />
        </div>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default Step1;
