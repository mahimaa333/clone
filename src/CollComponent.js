import React from 'react'

function CollComponent(props) {
    function reveal() {

        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 0;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

    window.addEventListener("scroll", reveal);

    reveal();

  return (
    <div>
        <div className="component-wrapper">
            <div className="comp-des">
                <div className="row">
                <div className="col">
            <div className="component-heading">
                <h1 className="heading">{props.heading}</h1>
                <p className="desc">{props.desc}</p>
                <a className="link" href={props.link}>
                    <p>{props.linkText}</p>
                    <img src="https://www.xivtech.io./Arrow-black.svg" alt="arrow-black"/>
                    </a>
            </div>
            </div>
            <div className="col">
                <img className="image" src={props.image} alt="collab"></img>
            </div>
            </div>
            </div>
        </div>
        
        
        <div className="component-wrapper-mob">
        <div className="com-mob-wrapper">
            <div className="component-heading-mob">
                <h1 className="heading-mob">{props.heading}</h1>
            </div>
            <div className="component-image-mob">
                <img className="image-mob" src={props.image} alt="collab"></img>
            </div>
            <div className="component-desc-mob">
                <p className="desc-mob">{props.desc}</p>
            </div>
            <div className="component-link-mob">
                <a className="link-mob" href={props.link}>
                    <p>{props.linkText}</p>
                    <img src="https://www.xivtech.io./Arrow-black.svg" alt="arrow-black"/>    
                </a>
            </div>
    </div>
    </div>
    </div>
  )
}

export default CollComponent