 
import { useState } from "react";
 

export default function GetInTouch() {
  
  const [email, setemail] = useState("");

  const handleSubmit = () => {
    if(email === " "){
      alert("Enter your mail ID");
    }
    fetch( 
      "https://module-7-a3af5-default-rtdb.firebaseio.com/newsletterEmail.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setemail("");
      });
  };

   

  return (
    <>
      <div className="inTouch">
        <h5>Get In Touch</h5>
        <div>
          <div className="email" 
          // onSubmit={ submitHandler }
          >
            <input type="email" placeholder="Your Email" value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}   
            />
            <button onClick={handleSubmit} >Subscribe</button>
          </div>
          <p className="input-text">Lorem impsum dolor amit</p>
        </div>
      </div>
    </>
  );
}
