import React, { useState } from 'react';
import { Container, Paper, Grid, Avatar, Button, Typography, Zoom } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Input from './Input';
// import { signup, signin } from '../../actions/auth';

const initialState = { firstname: '', lastname: '', email: '', password: '', confirmPassword: '' }
const Auth = () => {
    const [ isSignUp, setIsSignUp ] = useState(false);
    const [ showPassword, setShowPassword ] = useState(false);
    const [ formData, setFormData ] = useState(initialState);

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    // const handleSumbit = (e) => {
    //     e.preventDefault();
    //     if(isSignUp) {
    //         dispatch(signup(formData, history));
    //     } else {
    //         dispatch(signin(formData, history));
    //     }
    // };

    const handleChange = (e) => {
        setFormData({ ...formData, [ e.target.name ]: e.target.value });
    };

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            // dispatch({ type: 'AUTH', data: { result, token } });
            // history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = (error) => {
        console.log(error);
        console.log('Google Sign In was unsuccessful. Try Again Later!');
    }

    return (
        <Zoom in>
            <Container component='main' maxWidth='xs' sx={{
                marginTop: 12, marginBottom: 4
            }}>
                <Paper elevation={4} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    padding: 2
                }}>
                    <Avatar sx={{ backgroundColor: "#e91e63" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'>{isSignUp ? 'Sign Up (Student)' : 'Sign In'}</Typography>
                    <form>
                        <Grid container spacing={2}>
                            {isSignUp && (
                                <>
                                    <Input name='firstname' label='First Name' handleChange={handleChange} autoFocus half />
                                    <Input name='lastname' label='Last Name' handleChange={handleChange} half />
                                </>
                            )}
                            <Input name='email' label='Email Address' handleChange={handleChange} type='email' autoFocus />
                            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                            {isSignUp && <Input name='confirmPassword' label='Confirm Password' handleChange={handleChange} type='password' />}
                        </Grid>
                        <Button type='sumbit' fullWidth variant='contained' color='primary' sx={{
                            marginTop: 2, marginBottom: 2
                        }}>{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                                <Button onClick={switchMode}>{isSignUp ? 'Already have an account ? Sign In' : "Don't have an account ? Sign Up"}</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Zoom>
    );
}

export default Auth;
