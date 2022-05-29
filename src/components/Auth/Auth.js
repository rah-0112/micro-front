import React, { useState } from 'react';
import { Container, Paper, Grid, Avatar, Button, Typography, Zoom } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useHistory } from 'react-router-dom';
import * as api from '../../api';
import Input from './Input';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const initialState = { firstname: '', lastname: '', email: '', password: '', confirmPassword: '', noOfClasses: '', adminEmail: '' }
const Auth = () => {
    const [ isSignUp, setIsSignUp ] = useState(false);
    const [ showPassword, setShowPassword ] = useState(false);
    const [ formData, setFormData ] = useState(initialState);
    const [ alignment, setAlignment ] = React.useState('Student');

    const history = useHistory();
    const signin = async (formData) => {
        try {
            if (alignment === 'Admin') {
                const { data } = await api.signInAd(formData);
                history.push('/loggedAdmin');
                localStorage.setItem('profile', JSON.stringify({ user: data }));
            } else {
                const { data } = await api.signInStud(formData);
                history.push('/loggedStud');
                localStorage.setItem('profile', JSON.stringify({ user: data }));
            }
        } catch (error) {
            console.log(error);
        }
    }

    const signup = async (formData) => {
        try {
            if (alignment === 'Admin') {
                const { data } = await api.signUpAd(formData);
                history.push('/loggedAdmin');
                localStorage.setItem('profile', JSON.stringify({ user: data }));
            } else {
                const { data } = await api.signUpStud(formData);
                history.push('/loggedStud');
                localStorage.setItem('profile', JSON.stringify({ user: data }));
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            signup(formData);
        } else {
            signin(formData);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [ e.target.name ]: e.target.value });
    };

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    }

    const handleChanges = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

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
                    <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChanges}
                    >
                        <ToggleButton value="Admin">Admin</ToggleButton>
                        <ToggleButton value="Student">Student</ToggleButton>
                    </ToggleButtonGroup>
                    <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                    <form onSubmit={handleSumbit}>
                        <Grid container spacing={2}>
                            {isSignUp && (
                                <>
                                    <Input name='firstname' label='First Name' handleChange={handleChange} autoFocus half />
                                    <Input name='lastname' label='Last Name' handleChange={handleChange} half />
                                    {alignment === 'Admin' ? (<Input name='noOfClasses' label='Number of classes' handleChange={handleChange} />) : (<Input name='adminEmail' label='Admin Email' handleChange={handleChange} />)}
                                </>
                            )}
                            <Input name='email' label='Email Address' handleChange={handleChange} type='email' autoFocus />
                            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                            {isSignUp &&
                                <>
                                    <Input name='confirmPassword' label='Confirm Password' handleChange={handleChange} type='password' />
                                </>
                            }
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
