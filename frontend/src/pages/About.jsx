import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { UserMsg } from '../cmps/UserMsg';

export class About extends React.Component {
    state = {
        fullName: '',
        email: '',
        content: '',
        isUserMsg: false,
        msg: ''
    }

    handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({ ...prevState, [name]: value }));
    }

    userMsgShow = (msg) => {
        this.setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }));
        setTimeout(() => {
            this.setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000);
    }

    onSubmit = (ev) => {
        const { fullName, email, content } = this.state;
        ev.preventDefault();

        if (!fullName || !email || !content) {

            this.userMsgShow('All fields required');
            return;
        }

        const regexEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
        if (!regexEmail.test(email)) {
            this.userMsgShow('Invalid Email');
            return;
        }

        this.setState(prevState => ({ ...prevState, fullName: '', email: '', content: '' }), () => this.userMsgShow('Email sent! Thank you!'))
    }


    render() {
        const { fullName, email, content, isUserMsg, msg } = this.state
        return (
            <>
                <div className="about-page-background">
                    <section className="container">
                        <section className="about-section">
                            <h1 className="title first">About Pixie</h1>
                            <section className="flex wrap space-between about-pixie-container">
                                <div className="flex column text">
                                    <h2>We are Pixie!</h2>
                                    <p>
                                        Pixie is an easy-to-use, strong &amp; uniquie platform for web building.<br />
                                        With Pixie, everyone and every business, can set his own great-looking, responsive and dynamic website,
                                        without any need of technologie knowledge!
                                    </p>
                                    <p>
                                        As for june 2021, Pixie hires hounders web developers that put all they're effory on one and only mission.
                                    </p>
                                    <div className="moto">Help you build youre own website!</div>
                                </div>
                                <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blogs/chart/manage-your-team@2x.png" alt="About us" />
                            </section>
                        </section>

                        <section className="about-section">
                            <h1 className="title">Contact us</h1>
                            <form className="contact-us-form-container">
                                <div className="flex space-between contact-us-details">
                                    <TextField
                                        required
                                        label="Full name"
                                        name="fullName"
                                        autoComplete="Full name"
                                        id="fullName"
                                        variant="outlined"
                                        style={{ flexGrow: '1' }}
                                        value={fullName}
                                        onChange={this.handleChange}
                                    />
                                    <TextField
                                        required
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        id="email"
                                        variant="outlined"
                                        style={{ flexGrow: '1' }}
                                        value={email}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <textarea placeholder="Message..." name="content" value={content} onChange={this.handleChange} required></textarea>

                                <div className="text-center">
                                    <Button
                                        type="submit"
                                        className="send-btn"
                                        variant="contained"
                                        margin="normal"
                                        onClick={this.onSubmit}
                                    >
                                        Submit!
                                    </Button>
                                </div>

                            </form>
                        </section>

                        <section className="about-section">
                            <h1 className="title">Communication</h1>
                            <section className="flex wrap space-between align-center communication-container">
                                <iframe src="https://maps.google.com/maps?q=Yosef%20Yekuti'eli%204,%20Tel-Aviv&z=15&output=embed" title="Pixie map"></iframe>
                                <div className="flex column communication-details">
                                    <div>
                                        <span className="label">Address:</span><span>Yosef Yekuti'eli 4, Tel-Aviv, Israel.</span>
                                    </div>
                                    <div>
                                        <span className="label">Phone:</span><span>+972-03-9451620</span>
                                    </div>
                                    <div>
                                        <span className="label">Email:</span><span>contact@pixie.com</span>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </section>
                </div>

                { isUserMsg && < UserMsg msg={msg} />}
            </>
        )
    }
}