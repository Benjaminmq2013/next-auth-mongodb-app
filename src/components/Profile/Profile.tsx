import React from 'react'
import { Container, Figure } from 'react-bootstrap'
import { ProfileImage } from './ProfileImage'
import { UploadImageModal } from './UploadImageModal'

export const Profile = () => {
  return (
    <Container className="pt-5 d-flex">
      <div>
        <h2>Edit My Profile</h2>
        <Figure>
          <UploadImageModal />
          <Figure.Caption>Adriel Benjamin Martinez</Figure.Caption>
        </Figure>
      </div>

      
      
    </Container>
  )
}
