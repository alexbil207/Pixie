import React from 'react';
import { editorService } from '../../../service/editor-service';
import { UserMsg } from "../../UserMsg";

export class EditMapCenter extends React.Component {
    state = {
        newMapCenter: '',
        isUserMsg: false,
        msg: ''
    }

    componentDidMount() {
        const { element } = this.props
        this.setState({ newMapCenter: element.childs[0].prefs.src });
    }

    userMsgShow = (msg) => {
        this.setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }))
        setTimeout(() => {
            this.setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000)
    }

    handleChange = ({ target }) => {
        let newMapCenter = target.value;
        this.setState(prevState => ({ ...prevState, newMapCenter }));
    }

    changeMapCenter = (ev) => {
        ev.preventDefault();
        const { newMapCenter } = this.state;

        if (!newMapCenter) {
            this.userMsgShow('Map center is required');
            return;
        }

        const { element, editElement } = this.props
        const fixedSrc = `https://maps.google.com/maps?q=${newMapCenter}&z=15&output=embed`;
        const updatedElement = editorService.getElementUpdatedSrc(element, fixedSrc)
        editElement(updatedElement);
    }

    render() {
        const { newMapCenter, isUserMsg, msg } = this.state;

        return (
            <>
                <form className="flex column map-edit-container" onSubmit={this.changeMapCenter}>
                    <input type="text" name="newMapCenter" value={newMapCenter} placeholder="Insert a city or country name" onChange={this.handleChange} />
                    <button className="text-center pointer">OK</button>
                </form>

                {isUserMsg && <UserMsg msg={msg} />}
            </>
        )
    }
}