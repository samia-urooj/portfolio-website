const contactUs=()=>{
    return(
        <div className="contactDiv">
            <div className="form">
                <h3>Full Name:</h3>
                <input type="text" id="name" placeholder="Your name"></input>
                <h3>Email address:</h3>
                <input type="text" id="email" placeholder="xyz@gmail.com"></input>
                <h3>Phone number:</h3>
                <input type="number" id="number" placeholder="Your phone number"></input>
                <h3>Feedback:</h3>
                <input type="text" id="name" placeholder="Type your feedback here..."></input><br></br><br></br>
                <button>Submit</button>
                
                <br></br><br></br>
                <p>Thank you for reaching out! I appreciate your interest and look forward to connecting with you. Whether you have a project in mind, a question, or just want to say hello, I’m excited to hear from you. I’ll get back to you as soon as possible—thanks again for taking the time to get in touch!</p>
            </div>
        </div>
    )
}

export default contactUs;