import { useState } from "react";
import { sendEmail } from "../lib/emailjs";

export const useContactForm = (formRef) => {
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const success = await sendEmail(formRef.current);
      if (success) {
        setStatus({ loading: false, success: true, error: false });
        formRef.current.reset();
      } else {
        setStatus({ loading: false, success: false, error: true });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return { status, handleSubmit };
};

{
  /* <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>
    A message by {{ name }} has been received. Kindly respond at your earliest
    convenience.
  </div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            &#x1F464;
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{ name }}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">{{ time }}</div>
          <p style="font-size: 16px">{{ message }}</p>
        </td>
      </tr>
    </table>
  </div>
</div>; */
}
