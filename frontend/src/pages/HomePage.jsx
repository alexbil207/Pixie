import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ScrollAnimation from 'react-animate-on-scroll';
import { setData } from '../store/actions/data-actions';
import { loadTemplates } from '../store/actions/template-action';
import hero from '../assets/img/homepage/hero.gif';
import freedom from '../assets/img/homepage/freedom.png';
import customize from '../assets/img/homepage/customize.png';
import editor from '../assets/img/homepage/editor.png';
import { Loading } from '../cmps/Loading';
import { TemplatePreview } from "../cmps/TemplatePreview";


export class _HomePage extends React.Component {
    async componentDidMount() {
        await this.props.loadTemplates();
    }

    onSetData = (data) => {
        this.props.setData({ data });
        this.props.history.push('/editor');
    }



    render() {
        const { templates, isLoading } = this.props;

        return (
            <section className="homepage">
                <section className="flex wrap align-center justify-center hero-container">
                    <div>
                        <h1 className="title">Create a website you're proud of with <span>Pixie!</span></h1>
                        <div className="flex wrap">
                            <div className="flex column wrap content-container">
                                <p>Pixie is an easy-to-use, strong &amp; uniquie platform for web building!</p>
                                <Link to="/template" className="text-center">Go Pixie!</Link>
                            </div>
                            <img src={hero} alt="Go Pixie!" />
                        </div>
                    </div>
                    <div className="scroll-down-animation">
                        <div className="flex column justify-center align-center msg">
                            <h6>Scroll Down</h6>
                            <span className="fas scroll-arrow-icn"></span>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="guide-parse-background">
                        <section className="container" data-aos="fade-left">
                            <ScrollAnimation animateIn='bounceInLeft' duration={2}>
                                <div className="flex wrap space-between">
                                    <div className="text">
                                        <h2>The Freedom to Create the Websites You Want</h2>
                                        <p>
                                            Design and build your own high-quality websites.
                                            Whether you’re promoting your business,
                                            showcasing your work,
                                    you can do it all with the <span>Pixie</span> website Editor.</p>
                                    </div>
                                    <img src={freedom} alt="guide parse" />
                                </div>
                            </ScrollAnimation>
                        </section>
                    </div>

                    <div className="guide-parse-background">
                        <section className="container">
                            <ScrollAnimation animateIn='bounceInLeft' duration={2}>
                                <div className="flex wrap space-between">
                                    <div className="text">
                                        <h2>Customize your site</h2>
                                        <p>Pick a template and customize anything,
                                    or answer a few questions and get a free website designed just for you</p>
                                    </div>
                                    <img src={customize} className="parse-even" alt="guide parse" />
                                </div>
                            </ScrollAnimation>
                        </section>
                    </div>

                    <div className="guide-parse-background">
                        <section className="container">
                            <ScrollAnimation animateIn='bounceInLeft' duration={2}>
                                <div className="flex wrap space-between">
                                    <div className="text">
                                        <h2>Pixie Editor</h2>
                                        <p>Start from scratch or choose from over designer-made templates that you can fully
                                    customize using <span>Pixie</span> website Editor.</p>
                                    </div>
                                    <img src={editor} alt="guide parse" />
                                </div>
                            </ScrollAnimation>
                        </section>
                    </div>
                </section>

                <section className="container templates-container">
                    <Link to="/template" className="text-center"><h2>Templates</h2></Link>
                    {isLoading && <Loading />}
                    {!isLoading &&
                        <>
                            <div className="grid templates-preview-container">
                                <div className="template-card-container">
                                    <div onClick={() => {
                                        localStorage.removeItem('website');
                                        this.onSetData({ childs: [] })
                                    }}
                                        className="template-card">
                                        <div className="template-bar">
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                        </div>
                                        <div className="template-img">
                                            <div className="template-img-hover">
                                                <button>Start</button>
                                            </div>
                                        </div>
                                        <div className="template-title">Make New</div>
                                    </div>
                                </div>
                                {templates.slice(0, 5).map(template => <TemplatePreview key={template._id} onSetData={this.onSetData} template={template} />)}
                            </div>
                            <div className="show-more-container">
                                <Link to="/template" className="text-center">See all templates</Link>
                            </div>
                        </>
                    }
                </section>
            </section>
        );
    }
}


function mapStateToProps(state) {
    return {
        templates: state.templateModule.templates,
        isLoading: state.templateModule.isLoading,
    }
}


const mapDispatchToProps = {
    loadTemplates,
    setData
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)