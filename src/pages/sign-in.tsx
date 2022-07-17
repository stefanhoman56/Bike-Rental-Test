import { Box, Button, Container, Link, TextField } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/auth-context';

type Inputs = {
  email: string;
  password: string;
};

const SignIn: NextPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { signIn } = useContext(AuthContext);

  const onSubmit: SubmitHandler<Inputs> = async data =>
    signIn(data.email, data.password);

  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Head>
        <title>Bike Rentals - SignIn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Box style={{ flexDirection: 'column', display: 'flex' }}>
            <TextField
              {...register('email', { required: true })}
              id="email"
              type="email"
              label="Email"
            />
            <TextField
              {...register('password', { required: true })}
              required
              type="password"
              id="password"
              label="Password"
            />
          </Box>
          <Box style={{ margin: '8px' }}>
            <Button
              type="submit"
              variant="outlined"
              style={{ marginBottom: '12px' }}
            >
              Sign In
            </Button>
            <br />
            <NextLink href="/sign-up">
              <Link color="inherit" href="#!">
                Don&apos;t have an account ?
              </Link>
            </NextLink>
          </Box>
        </Box>
      </section>
    </Container>
  );
};

export default SignIn;