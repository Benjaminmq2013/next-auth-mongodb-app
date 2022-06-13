import React from 'react'
import { OverlayTrigger, Tooltip, Figure } from 'react-bootstrap'

type Props = {
    handleShow: Function,
}

export const ProfileImage:React.FC<Props> = ({ handleShow }) => {
    const placement = "top"

    const FigureStyles = {
        borderRadius: "9px",
        cursor: "pointer"
    }
    const handleShowModal = () =>{
        handleShow()
    }

  return (
    <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              <strong>Click</strong> to Edit.
            </Tooltip>
          }
        >
          <Figure.Image 
            style={FigureStyles}
            width={171}
            height={180}
            alt="Pofile Image"
            src="/assets/images/profile-image.png"
            onClick={ handleShowModal }
          />
    </OverlayTrigger>
  )
  
}
