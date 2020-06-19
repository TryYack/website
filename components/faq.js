import React from 'react'
import { ChevronDown, ChevronRight } from 'react-feather'

function Row(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <a name="faq"></a>
      <style jsx>{`
        .row {
          width: 50%;
          margin-right: auto;
          margin-left: auto;   
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          align-items: flex-start;  
          margin-bottom: 20px;
        }

        .row .icon {
          cursor: pointer;
          opacity: 1;
          transition: opacity 0.5s;
        }

          .row .icon:hover {
            opacity: 0.75
          }

        .row .content {
          width: 90%;
          margin-left: 10px;  
        }

          .row .content h3 {
            font-size: 22px;
            color: #929AAC;
            font-family: roc-grotesk, sans-serif;
            font-weight: 400;
            
            opacity: 1;
            transition: opacity 0.5s;
            cursor: pointer;
          }

            .row .content h3:hover {
              opacity: 0.75;
            }

          .row .content p {
            font-size: 14px;
            display: ${open ? 'block' : 'none'};
            color: #F3F6FB;
            line-height: 24px;
            padding-bottom: 50px;
            width: 100%;
          }
      `}</style>
      <div className="row">
        <div className="icon" onClick={() => setOpen(!open)}>
          {open ? <ChevronDown color="#929AAC" size={24} /> : <ChevronRight color="#929AAC" size={24} />}
        </div>
        <div className="content">
          <h3 onClick={() => setOpen(!open)}>{props.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: props.text}}></p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default function Faq(props) {
  return (
    <React.Fragment>
      <style jsx>{`
        .faq {
          background-color: #212835;
          padding: 50px;
          padding-top: 0px;
          padding-bottom: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;
        }

        .faq h1 {
          font-size: 48px;
          width: 40%;
          margin-right: auto;
          margin-left: auto;
          margin-top: 50px;
          margin-bottom: 50px;
          text-align: center;
          color: #F3F6FB;
          font-family: roc-grotesk, sans-serif;
          font-weight: bold;
          font-style: normal;
        }
      `}</style>

      <div className="faq">
        <h1>
          FAQ
        </h1>
        
        <Row 
          title="This seems very new, what's the story?"
          text="You're correct! Yack is a new messaging app built from the ground up to make communication & collaboration easier for your team."
        />

        <Row 
          title="But, is this just another Slack or Microsoft Teams?"
          text="You're not wrong, but we believe there are a few things that Yack does a lot better. Being mostly open source & our app platform to name a few."
        />

        <Row 
          title="Where is the pricing & plans info?"
          text="We are busy finalising our paid plans - please subscribe to our newsletter to keep updated here and how premium plans will affect current features."
        />

        <Row 
          title="Data & security is pretty important to us."
          text="We're rolling out GDPR compliance very very soon and will update you as soon as we can about that - subsribe to our newsletter to keep updated!"
        />

        <Row 
          title="Why not open source the API as well?"
          text="By playing a few things closer to the chest, we feel more confident about giving users the best experience."
        />

        <Row 
          title="When will a more public release happen?"
          text="Soon - subscribe to the newsletter to keep updated!"
        />
        
        <Row 
          title="I need to connect my GitHub (or other) account"
          text="We are busy building more integration, but in the meantime you'll be able to use the Zapier app really."
        />

        <Row 
          title="Something has broken / I can't log in."
          text="Oh no, sorry about that. Unfortunately Yack is still in alpha, so please expect things to break. You can email us at <a href='mailto:support@yack.co' style='color: #00aeff;'>support@yack.co</a> for more info."
        />

        <Row 
          title="Your logo doesn't make sense."
          text="It's a skewed Y. ¯\_(ツ)_/¯"
        />
      </div>
    </React.Fragment>
  )
}
