import React from 'react';
import { editorService } from '../../../service/editor-service';
import { UserMsg } from "../../UserMsg";

export class EditVideoSrc extends React.Component {
    state = {
        newVideoUrl: '',
        isUserMsg: false,
        msg: ''
    }

    userMsgShow = (msg) => {
        this.setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }))
        setTimeout(() => {
            this.setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000)
    }

    componentDidMount() {
        const { element } = this.props
        this.setState({ newVideoUrl: element.childs[0].prefs.src });
    }

    handleChange = ({ target }) => {
        let newVideoUrl = target.value;
        this.setState(prevState => ({ ...prevState, newVideoUrl }));
    }

    changeSrc = (ev) => {
        ev.preventDefault();
        const { newVideoUrl } = this.state;

        if (!newVideoUrl) {
            this.userMsgShow('Source is required');
            return;
        }

        // regex src check
        const regexYoutube = new RegExp(/^((http(s)?:\/\/)?)(www\.)?((youtube\.com\/)|(youtu.be\/))[\S]+/i);
        if (!regexYoutube.test(newVideoUrl)) {
            this.userMsgShow('Broken Youtube URL');
            return;
        }

        const { element, editElement } = this.props
        const fixedSrc = editorService.getFixedYoutubeUrl(newVideoUrl);
        const updatedElement = editorService.getElementUpdatedSrc(element, fixedSrc)
        editElement(updatedElement);
    }


    render() {
        const { newVideoUrl, isUserMsg, msg } = this.state;

        return (
            <>
                <form className="flex column video-edit-container" onSubmit={this.changeSrc}>
                    <input type="text" name="src" value={newVideoUrl} placeholder="YouTube URL" onChange={this.handleChange} />
                    <button className="text-center pointer">OK</button>
                </form>

                {isUserMsg && <UserMsg msg={msg} />}
            </>
        )
    }
}