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
          padding-bottom: 0px;
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
          text="Yack is a new messaging platform built from the ground up to make communication & collaboration easier for your team."
        />

        <Row 
          title="But, is this just another Slack or Microsoft Teams?"
          text="We believe there are a few things that Yack does better. Being mostly open source for one."
        />

        <Row 
          title="Where is the pricing information?"
          text="We are busy finalising our paid plans - please subscribe to our mailing list to keep updated on how premium plans will affect current features."
        />

        <Row 
          title="Data & security is pretty important to us."
          text="We're rolling out GDPR compliance very soon and will update people as soon as we can about that - subscribe to our mailing list to keep updated."
        />

        <Row 
          title="Why not open source the API as well?"
          text="By playing a few things closer to the chest, we feel more confident about giving users the best experience."
        />

        <Row 
          title="When will a more stable beta release happen?"
          text="Soon - subscribe to the mailing list to keep updated!"
        />
        
        <Row 
          title="I need to connect my GitHub (or other) account"
          text="We are busy building more integrations, including a Zapier app."
        />

        <Row 
          title="Something has broken / I can't log in / the world is ending."
          text="Sorry about that. Yack is still in alpha, so please expect things to break. You can email us at <a href='mailto:support@yack.co' style='color: #00aeff;'>support@yack.co</a> for support."
        />

        <Row 
          title="Your logo doesn't make sense."
          text="¯\_(ツ)_/¯"
        />
      </div>
    </React.Fragment>
  )
}
