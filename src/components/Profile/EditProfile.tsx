import React from 'react'
import { Form, Modal } from 'react-bootstrap'

export const EditProfile = () => {
  return (
    <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="name"
                placeholder="Escribe tu Nombre"
                autoFocus
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Select a profile photo from your gallery</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
          </Form>
    </Modal.Body>
  )
}
