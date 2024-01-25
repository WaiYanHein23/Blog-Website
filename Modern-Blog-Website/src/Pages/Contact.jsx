// 
import React, { useRef } from 'react';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <di>
      <div className='w-1/3 ml-20 border-1 py-30 bg-gray-400'>
      <form className=' grid grid-rows-8 m-20 items-center justify-center' ref={form} onSubmit={sendEmail}>
     <div className='mt-4'>
     <label>Name</label>
      <input type="text" name="user_name" className='border-2 px-2 py-1 m-2' />
     </div>
     <div>
     <label>Email</label>
      <input type="email" name="user_email" className='border-2 px-2 py-1 m-2'  />
     </div>
      <div>
      <label>Message</label>
      <textarea name="message" className='border-2 px-2 py-2 m-2' />
      </div>
      <input type="submit" value="Send" className='border-2 m-4 mx-20'/>
    </form>
    </div>
    </di>
  );
};
