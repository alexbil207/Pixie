import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { signUp } from '../store/actions/user-actions';
import { UserMsg } from '../cmps/UserMsg';
import { Loading } from '../cmps/Loading';
import { useForm } from '../hooks/useForm'



export const SignUp = () => {
    const dispatch = useDispatch();
    const { user, isLoading } = useSelector(state => state.userModule);
    const history = useHistory();
    const [form, handleChange] = useForm(
        {
            email: '',
            fullName: '',
            password: ''
        })
    const [state, setState] = useState({
        isUserMsg: false,
        msg: ''
    })

    const userMsgShow = (msg) => {
        setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }));
        setTimeout(() => {
            setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000);
    }


    const onSubmit = async (ev) => {
        ev.preventDefault();
        const { email, password, fullName } = state;

        if (!email || !password || !fullName) {
            userMsgShow('All fields required');
            return;
        }

        const regexEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
        if (!regexEmail.test(email)) {
            userMsgShow('Invalid Email');
            return;
        }


        try {
            await signUp(form);
            history.push(`/profile/${user._id}`);
        } catch (err) {
            userMsgShow('Email Already in use');
            return;
        }

    }
    const { isUserMsg, msg } = state;
    if (isLoading) return <Loading />
    return (
        <>
            <div className="flex column align-center justify-center signup-page-container">
                <div className="title">
                    SignUp
                </div>

                <form>
                    <TextField
                        autoFocus
                        required
                        fullWidth
                        label="Full Name"
                        name="fullName"
                        autoComplete="fname"
                        id="fullName"
                        variant="outlined"
                        margin="normal"
                        onChange={(ev) => handleChange(ev)}
                    />

                    <TextField
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
                        required
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
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
                        color="primary"
                        onClick={(ev) => onSubmit(ev)}
                    >
                        SignUp
                    </Button>

                    <div className="text-center flex column align-center toggle-sign-link">
                        <span>
                            Already have an account?
                        </span>
                        <Link to="login">
                            Login
                        </Link>
                    </div>
                </form>
            </div>

            {isUserMsg && < UserMsg msg={msg} />}
        </>
    );



}

























// class _SignUp extends React.Component {
//     state = {
//         email: '',
//         fullName: '',
//         password: '',
//         isUserMsg: false,
//         msg: ''
//     }

//     handleChange = ({ target }) => {
//         const name = target.name;
//         const value = target.value;
//         this.setState(prevState => ({ ...prevState, [name]: value }));
//     }

//     userMsgShow = (msg) => {
//         this.setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }));
//         setTimeout(() => {
//             this.setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
//         }, 2000);
//     }

//     onSubmit = async (ev) => {
//         ev.preventDefault();
//         const { signUp } = this.props;
//         const { email, password, fullName } = this.state;

//         if (!email || !password || !fullName) {
//             this.userMsgShow('All fields required');
//             return;
//         }

//         const regexEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
//         if (!regexEmail.test(email)) {
//             this.userMsgShow('Invalid Email');
//             return;
//         }

//         const userInfo = {
//             email,
//             password,
//             fullName
//         }
//         try {
//             await signUp(userInfo);
//             const { user } = this.props;
//             this.props.history.push(`/profile/${user._id}`);
//         } catch (err) {
//             this.userMsgShow('Email Already in use');
//             return
//         }

//     }

//     render() {
//         const { isUserMsg, msg } = this.state;
//         const { isLoading } = this.props;
//         if (isLoading) return <Loading />
//         return (
//             <>
//                 <div className="flex column align-center justify-center signup-page-container">
//                     <div className="title">
//                         SignUp
//                     </div>

//                     <form>
//                         <TextField
//                             autoFocus
//                             required
//                             fullWidth
//                             label="Full Name"
//                             name="fullName"
//                             autoComplete="fname"
//                             id="fullName"
//                             variant="outlined"
//                             margin="normal"
//                             onChange={this.handleChange}
//                         />

//                         <TextField
//                             required
//                             fullWidth
//                             label="Email Address"
//                             name="email"
//                             autoComplete="email"
//                             id="email"
//                             variant="outlined"
//                             margin="normal"
//                             onChange={this.handleChange}
//                         />

//                         <TextField
//                             required
//                             fullWidth
//                             label="Password"
//                             name="password"
//                             type="password"
//                             autoComplete="current-password"
//                             id="password"
//                             variant="outlined"
//                             margin="normal"
//                             onChange={this.handleChange}
//                         />

//                         <Button
//                             type="submit"
//                             fullWidth
//                             className="send-btn"
//                             variant="contained"
//                             color="primary"
//                             onClick={this.onSubmit}
//                         >
//                             SignUp
//                         </Button>

//                         <div className="text-center flex column align-center toggle-sign-link">
//                             <span>
//                                 Already have an account?
//                                 </span>
//                             <Link to="login">
//                                 Login
//                             </Link>
//                         </div>
//                     </form>
//                 </div>

//                 { isUserMsg && < UserMsg msg={msg} />}
//             </>
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         user: state.userModule.user,
//         isLoading: state.userModule.isLoading,

//     }
// }

// const mapDispatchToProps = {
//     signUp,
// }


// export const SignUp = connect(mapStateToProps, mapDispatchToProps)(_SignUp)