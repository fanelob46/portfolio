function MyInformation(){
    return <div className="info">
        <div className="discuss">
            <h1>Lets discuss</h1>
            <h1>Somethings Cool</h1>
            <h1>Together</h1>
        </div>
        <div className="email-info">
            <div className="name">
            <input type="text" placeholder="Your Name" name="text"></input>
            </div>
            <div className="email">
            <input type="email" placeholder="Your Email" name="email"></input>
            </div>
            <div className="message">
            <input type="text" placeholder="Your Message" name="text"></input>
            </div>
        <button className="btn-sub">Submit</button>
        </div>
    </div>

}
export default MyInformation;