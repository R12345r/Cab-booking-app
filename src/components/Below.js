import React from 'react';

const Below = () => {
  function validateForm() {

    var name = document.getElementById('contact_name').value;
    var email = document.getElementById('contact_email').value;
    var phone = document.getElementById('contact_phone').value;
    var message = document.getElementById('contact_message').value;
    var nameError = document.getElementById('name_error');
    var emailError = document.getElementById('email_error');
    var phoneError = document.getElementById('phone_error');
    var messageError = document.getElementById('message_error');

    nameError.classList.add('hidden');
    emailError.classList.add('hidden');
    phoneError.classList.add('hidden');
    messageError.classList.add('hidden');

    var isValid = true;

    if (name.trim() === '') {
      nameError.classList.remove('hidden');
      isValid = false;
    }

    if (!isValidEmail(email)) {
      emailError.classList.remove('hidden');
      isValid = false;
    }

    if (!isValidPhone(phone)) {
      phoneError.classList.remove('hidden');
      isValid = false;
    }

    if (message.trim() === '') {
      messageError.classList.remove('hidden');
      isValid = false;
    }

    return isValid;
  }

  function isValidEmail(email) {
    // email validation 
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  function isValidPhone(phone) {
    //  phone validation 
    var phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  }

  return (
<div className="bg-gray-200 p-4 md:p-6">
  <div className="container mx-auto flex flex-col md:flex-row">
    <div className="md:w-7/12 p-4 md:p-6">
      <h2 className="text-2xl font-semibold">Get in touch</h2>
      <p className="text-gray-700 my-5">Send us a message, and we will get back to you as soon as possible!</p>

      <div className="text-xl font-semibold mb-2">Call us at</div>
      <p className="text-lg">+91 9732120302</p>

      <div className="text-xl font-semibold mt-4">Email us at</div>
      <p className="text-lg">support@Hireca Cabs.com</p>

      <div className="mt-4">
        <a href="https://www.facebook.com/cabbazar/" target="_blank" className="text-blue-500 hover:text-blue-700 mr-2">
          <i className="fa fa-facebook-square"></i>
        </a>
        <a href="https://twitter.com/cabbazar" target="_blank" className="text-blue-500 hover:text-blue-700 mr-2">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/company/cabbazar" target="_blank" className="text-blue-500 hover:text-blue-700 mr-2">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/cabbazar" target="_blank" className="text-blue-500 hover:text-blue-700 mr-2">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://in.pinterest.com/cabbazar" target="_blank" className="text-blue-500 hover:text-blue-700 mr-2">
          <i className="fa fa-pinterest"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCb-sflFOihYFkb6n7LxxrAw" target="_blank" className="text-blue-500 hover:text-blue-700 mr-2">
          <i className="fa fa-youtube-play"></i>
        </a>
      </div>
    </div>
    <div className="md:w-5/12 p-4 md:p-6">
      <form id="contact" onSubmit={validateForm}>
        <div id="thanks_block" className="hidden">
          <div className="info info-horizontal">
            <div className="description">
              <h4 className="text-2xl font-semibold text-green-600">
                Thanks! We will get back to you soon.
              </h4>
            </div>
          </div>
        </div>
        <div id="contact_block">
          <div className="mb-4">
            <label htmlFor="contact_name" className="text-lg">Name</label>
            <input id="contact_name" type="text" name="name" className="w-full bg-gray-100 border border-gray-300 p-2 rounded" placeholder="Enter your name" required />
            <div className="text-red-500 text-sm hidden" id="name_error">Please enter your name.</div>
          </div>
          <div className="mb-4">
            <label htmlFor="contact_email" className="text-lg">Email</label>
            <input id="contact_email" type="email" name="email" className="w-full bg-gray-100 border border-gray-300 p-2 rounded" placeholder="Enter your email id" required />
            <div className="text-red-500 text-sm hidden" id="email_error">Please enter a valid email address.</div>
          </div>
          <div className="mb-4">
            <label htmlFor="contact_phone" className="text-lg">Phone</label>
            <input id="contact_phone" type="tel" name="phone" className="w-full bg-gray-100 border border-gray-300 p-2 rounded" placeholder="Enter your phone number" required />
            <div className="text-red-500 text-sm hidden" id="phone_error">Please enter a valid phone number.</div>
          </div>
          <div className="mb-4">
            <label htmlFor="contact_message" className="text-lg">Your message</label>
            <textarea id="contact_message" name="message" className="w-full bg-gray-100 border border-gray-300 p-2 rounded" rows="4" placeholder="Tell us your thoughts and feelings..." required></textarea>
            <div className="text-red-500 text-sm hidden" id="message_error">Please enter your message.</div>
          </div>
          <div className="text-center">
            <button type="submit" className="w-48 h-12  text-white
        bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 rounded">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  );
}

export default Below;
