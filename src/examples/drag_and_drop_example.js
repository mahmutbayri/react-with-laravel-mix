import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {SelectedContainer, ImageList} from "./DragAndDrop/containers";

class DragAndDropExample extends Component {
    imagePathPattern = 'https://picsum.photos/id/__ID__/300/250';

    constructor(props) {
        super(props);
        this.state = {
            imageListIds: [
                1005,
                1003,
                1024,
                1000,
                1001,
                1002,
            ],
            selectedIds: []
        };

        this.drag = this.drag.bind(this);
        this.drop = this.drop.bind(this);
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    drag(imageId) {
        this.setState({
            currentDragged: imageId,
        });
    }

    drop() {
        this.setState((state, props) => {
            return {
                selectedIds: state.selectedIds.concat(state.currentDragged),
                imageListIds: state.imageListIds.filter((item) => item !== state.currentDragged),
            }
        })
    }

    render() {
        return (
            <div>
                <SelectedContainer
                    allowDrop={this.allowDrop}
                    drop={this.drop}
                    selectedIds={this.state.selectedIds}
                    imagePathPattern={this.imagePathPattern}
                />
                <ImageList
                    drag={this.drag}
                    imageListIds={this.state.imageListIds}
                    imagePathPattern={this.imagePathPattern}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <DragAndDropExample/>,
    document.getElementById('root')
);
