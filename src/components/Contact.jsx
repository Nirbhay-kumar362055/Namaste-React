import { useState } from "react";
const Contact = () => {
  const [message, setMessage] = useState([]);
  return (
    <div id="contact">
      <h3>If you have any query, you can contact us at</h3>
      <ul>
        <li>
          Email: <b>om2215197@gndec.ac.in</b>
        </li>
        <li>Phone: 8757710585</li>
      </ul>
      <input
        type="text"
        placeholder="Leave a message for us"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></input>
      <button>Send</button>
    </div>
  );
};

export default Contact;