import React from "react";

const Contact = () => {
  return (
    <>
      <h4 className=" px-3 px-md-5 text-warning text-center display-6 my-5 windtitle fw-bold">Contact Us</h4>

      <div className="row px-3 px-md-5 d-flex justify-content-center">
        <div className="col-12 col-md-7 contact-form">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="useremail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="useremail"
              placeholder="JohnDoe@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailsubject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="emailsubject"
              placeholder="Regarding Web Development..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailmessage" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="emailmessage"
              rows="3"
            ></textarea>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-warning px-5 py-2">
              Sign in
            </button>
          </div>

          <div className="d-flex justify-content-between mt-5">

            <div className="d-flex align-items-center my-3">
                <div className="icon px-4 py-3 bg-dark text-white me-4 rounded"> <i className="fa-solid fa-envelope fs-4"></i> </div>
                <div className="label">
                    <label htmlFor="" className="my-2  text-warning contact-title fw-bold">Email</label>
                    <p className="">psthamizhan02@gmail.com</p>
                </div>
            </div>

            <div className="d-flex align-items-center">
                <div className="icon px-4 py-3 bg-dark text-white me-4 rounded"> <i class="fa-solid fa-location-dot fs-4"></i> </div>
                <div className="label">
                    <label htmlFor="" className="my-2 text-warning contact-title fw-bold">Location</label>
                    <p className="">Tamilnadu, India</p>
                </div>
            </div>

            <div className="d-flex align-items-center my-4">
                <div className="icon px-4 py-3 bg-dark text-white me-4 rounded"> <i className="fa-brands fa-github fs-4"></i> </div>
                <div className="label">
                    <label htmlFor="" className="my-2 text-warning contact-title fw-bold">Get Code</label>

                    <p>Go to <a href="https://github.com/psvel6672" target="_blank" className="mx-1">Github</a>...</p>
                </div>
            </div>

        </div>
        </div>

      </div>
    </>
  );
};

export default Contact;
