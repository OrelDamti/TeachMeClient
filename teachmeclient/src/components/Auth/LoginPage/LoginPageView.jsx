/* eslint-disable no-unused-vars */
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LoginPageView()
{
    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"

            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" >
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <br></br>
            <Button variant="warning">Login</Button>{' '}
        </>
    );
}

export default LoginPageView;