import React from "react";



function Contact() {
    return(
<div class="row">
    <div className="col-md-8 col-10 card text-white rounded bg-dark mx-auto mt-5">
        <div class="card-body">
        <h1 className="row justify-content-center">Card title</h1>
        <hr></hr>
        
        <section className="mb-3">
        <label for="Name">Name</label>
        <input type="text" class="form-control" id="firstName" placeholder="John Smith" value="" required></input>
        <div className="invalid-feedback"></div>
        </section>

        <section className="mb-3">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="you@example.com"></input>
        <div className="invalid-feedback"></div>
        </section>

        <section>
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </section>
        <button type="button" class="btn button">Submit</button>
        </div>

    </div>
</div>
    )
}

export default Contact;

