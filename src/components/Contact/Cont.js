import React from "react";
import "./Cont.css";
const Cont = () => {
  return (
    <div>
      <div class="container">
        <div class="contact-parent">
          <div class="contact-child child1">
            <p>
              <i class="fas fa-map-marker-alt"></i> Address <br />
              <span>
                {" "}
                19/1 , Rajar Goli
                <br />
                Sylhet, BD
              </span>
            </p>

            <p>
              <i class="fas fa-phone-alt"></i> Let's Talk <br />
              <span> +8801729134248</span>
            </p>

            <p>
              <i class=" far fa-envelope"></i> Email <br />
              <span>tanjimtc74@gmail.com</span>
            </p>
          </div>

          <div
            class="contact-child child2"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,206,198,1) 20%, rgba(133,189,186,1) 100%)",
            }}
          >
            <div class="inside-contact">
              <h2>Contact US</h2>
              <h3>
                <span id="confirm" />
              </h3>

              <p>Name *</p>
              <input id="txt_name" type="text" Required="required" />

              <p>Email *</p>
              <input id="txt_email" type="text" Required="required" />

              <p>Phone *</p>
              <input id="txt_phone" type="text" Required="required" />

              <p>Subject *</p>
              <input id="txt_subject" type="text" Required="required" />

              <p>Message *</p>
              <textarea
                id="txt_message"
                rows="4"
                cols="20"
                Required="required"
              ></textarea>

              <input type="submit" id="btn_send" value="SEND" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cont;
