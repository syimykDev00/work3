import React from 'react';

const ContactPage = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact">
                    <h1>Hello world</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem delectus deserunt dicta
                        doloremque doloribus dolorum esse excepturi facilis fugit harum id illum inventore ipsum itaque
                        iure labore laboriosam laborum molestias nemo neque nihil nisi obcaecati quas, qui quis,
                        repudiandae sequi soluta suscipit tempore temporibus ullam vitae voluptates. Alias architecto
                        dolor esse est impedit iste molestiae necessitatibus quisquam rem sed? Amet assumenda at cumque
                        distinctio dolor dolore eaque ex excepturi harum ipsum labore mollitia nam quidem quod, rerum
                        soluta ullam ut. A ab accusantium aperiam asperiores cum debitis ea illo incidunt mollitia nam
                        porro, qui quidem rem unde velit veniam, vero. Ab animi, architecto blanditiis consequuntur
                        dicta dolorem doloremque eos et exercitationem in iusto nemo nostrum numquam perspiciatis
                        possimus repellendus repudiandae sit temporibus ullam voluptate! Culpa cum delectus dolor
                        dolores incidunt magnam nemo rerum sint, velit voluptatum! Expedita in magni nobis odio pariatur
                        perspiciatis placeat ullam vitae voluptatibus? Commodi, porro.</p>
                    <div className="contact-inputs">
                        <input type="text" placeholder="Name..."/>
                        <input type="text" placeholder="Surname..."/>
                        <input type="email" placeholder="Email..."/>
                        <input type="number" placeholder="Age..."/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;