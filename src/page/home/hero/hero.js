import React from 'react';
import heroImageOne from './../../../assets/img/heroImageOne.webp'

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <h1>Hello world</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquam assumenda autem beatae
                        corporis culpa dignissimos eaque eligendi et ex illo itaque labore, nam natus non porro qui quia
                        quod rem sapiente soluta tempora tempore tenetur velit voluptatem. Ad architecto cum doloribus
                        et facere fuga illum incidunt iure libero nam nemo odit perspiciatis quas quia rem, velit,
                        veritatis? Fuga modi nam nemo obcaecati, omnis quas qui quis vel? Accusamus adipisci animi
                        assumenda atque cumque cupiditate dignissimos eaque, et excepturi itaque iusto magni molestiae
                        necessitatibus, nobis officia perspiciatis placeat provident quam quasi quis quo reiciendis rem
                        sed sit soluta totam ullam vel! Aperiam corporis, earum eligendi expedita, incidunt iste nihil
                        nisi officia repudiandae saepe similique sint, velit voluptatibus? Asperiores deserunt dicta eos
                        hic maiores non optio placeat possimus quibusdam, quidem. Asperiores aut consequuntur culpa
                        eaque nulla numquam quasi suscipit tempora. Adipisci aspernatur autem blanditiis cum cupiditate
                        deserunt doloribus eaque eum hic iste itaque maiores maxime molestiae mollitia nemo neque nihil
                        odio officiis porro quas quia quibusdam quidem quo, recusandae reprehenderit tenetur vero
                        voluptate. Ad commodi delectus dignissimos dolor eos, est exercitationem id illum iusto magnam
                        molestiae nemo neque nihil nobis nostrum optio quaerat quis, quod quos repellat reprehenderit
                        totam ut vel?</p>
                    <img src={heroImageOne} alt="img"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;