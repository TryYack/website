import React from 'react'
import { ChevronDown } from 'react-feather'

function Row(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
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
            font-size: 18px;
            color: #929AAC;
            font-family: nimbus-sans-extended, sans-serif;
            font-weight: 400;
            margin-bottom: 10px;
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
          }
      `}</style>
      <div className="row">
        <div className="icon" onClick={() => setOpen(!open)}>
          <ChevronDown color="#929AAC" size={24} />
        </div>
        <div className="content">
          <h3 onClick={() => setOpen(!open)}>{props.title}</h3>
          <p>{props.text}</p>
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
          margin-top: 100px;
          text-align: center;
          color: #F3F6FB;
          font-family: nimbus-sans-extended, sans-serif;
          font-weight: bold;
          font-style: normal;
        }
      `}</style>

      <div className="faq">
        <h1>
          FAQ
        </h1>
        
        <Row 
          title="This is the first FQA thing"
          text="And this is the text"
        />

      </div>
    </React.Fragment>
  )
}
