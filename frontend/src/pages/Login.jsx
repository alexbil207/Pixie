import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { loadUser } from '../store/actions/user-actions';
import { UserMsg } from '../cmps/UserMsg.jsx';
import { Loading } from '../cmps/Loading';
import { useForm } from '../hooks/useForm'



export const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user, isLoading } = useSelector(state => state.userModule)
    const [form, handleChange] = useForm({

        email: '',
        password: '',
    })
    const [state, setState] = useState({
        isUserMsg: false,
        msg: '',
    })

    const userMsgShow = (msg) => {
        setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }));
        setTimeout(() => {
            setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000);
    }


    const onSubmit = async (ev) => {
        ev.preventDefault();
        const { email, password } = form;
        if (!email || !password) {
            userMsgShow('Email address and password required');
            return;
        }

        const regexEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
        if (!regexEmail.test(email)) {
            userMsgShow('Invalid Email');
            return;
        }

        const credentials = {
            email,
            password,
        }

        try {
            dispatch(loadUser(credentials))
            history.push(`/profile/${user._id}`);
        } catch (err) {
            userMsgShow('Invalid Email or Password');
            return
        }
    }
    if (isLoading) return <Loading />
    const { isUserMsg, msg } = state;
    return (
        <>
            <div className="flex column align-center justify-center login-page-container">
                <div className="title">
                    Login
                </div>

                <form>
                    <TextField
                        autoFocus
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        id="email"
                        variant="outlined"
                        margin="normal"
                        onChange={(ev) => handleChange(ev)}
                    />

                    <TextField
                        type="password"
                        required
                        fullWidth
                        label="Password"
                        name="password"
                        id="password"
                        variant="outlined"
                        margin="normal"
                        onChange={(ev) => handleChange(ev)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        className="send-btn"
                        variant="contained"
                        margin="normal"
                        onClick={(ev) => onSubmit(ev)}
                    >
                        Login
                    </Button>

                    <div className="text-center flex column align-center toggle-sign-link">
                        <span>
                            Don't have an account?
                        </span>
                        <Link to="signup">
                            Signup
                        </Link>
                    </div>
                </form>
            </div>
            {isUserMsg && < UserMsg msg={msg} />}
        </>
    );
}
