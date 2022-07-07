import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { setMealsToken, setCocktailsToken, setUserLogin } from '../services/login';
import logo from '../images/appLogo.svg';

const Login = () => {
  const history = useHistory();
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setUserLogin({ email: data.email });
    setMealsToken(1);
    setCocktailsToken(1);
    history.push('/foods');
  }

  return (
    <section
      className="d-flex align-items-center justify-content-center
     min-vh-100 bg-light"
    >
      <Container
        className="border mx-4 shadow p-3 mb-5 bg-white rounded"
      >
        <section className="d-flex flex-column align-items-center">
          <img
            src={ logo }
            alt="app logo"
            style={ { width: '65vw' } }
          />
          <h2 className="name-title">My Personal Chef</h2>
        </section>
        <Form onSubmit={ handleSubmit(onSubmit) }>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="text-muted">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              data-testid="email-input"
              {...register("email", { required: "Email Address is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }) }
            />
            <Form.Text className="text-danger ml-2">
              { errors.email?.message }
              { (errors.email?.type) === 'pattern' && 'Email format invalid' }
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label className="text-muted">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              data-testid="password-input"
              {...register("password", { required: "Password is required", minLength: 6, maxLength: 12 }) }
            />
            <Form.Text className="text-danger ml-2">
              { errors.password?.message }
              {(errors.password?.type) === 'minLength' && 'Password must have at least 6 characters'}
              {(errors.password?.type) === 'maxLength' && 'Password must have a maximum of 12 characters'}
            </Form.Text>
          </Form.Group>
          <section className="d-flex justify-content-center mt-4">
            <Button
              className="w-75"
              variant='danger'
              type="submit"
              data-testid="login-submit-btn"
            >
              Sign in
            </Button>
          </section>
        </Form>
      </Container>
    </section>
  );
};

export default Login;
