import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {SelectedContainer, ImageList} from "./DragAndDrop/containers";

class DragAndDropExample extends Component {
    imagePathPattern = 'https://picsum.photos/id/__ID__/300/250';

    constructor(props) {
        super(props);
        this.state = {
            temporaryImage: false,
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

    onDragEnd(ev) {
        ev.preventDefault();
        this.setState({
            temporaryImage: false
        });
    }

    drag(imageId) {
        this.setState({
            currentDragged: imageId,
            temporaryImage: imageId
        });
    }

    drop() {
        this.setState((state, props) => {
            return {
                selectedIds: state.selectedIds.concat(state.currentDragged),
                imageListIds: state.imageListIds.filter((item) => item !== state.currentDragged),
                temporaryImage: false
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className='col-6'>
                        <div className="card">
                            <div className="card-body" style={{minHeight: '100px'}}>
                                <h5 className="card-title">Drag Here</h5>
                                <SelectedContainer
                                    allowDrop={this.allowDrop}
                                    drop={this.drop}
                                    selectedIds={this.state.selectedIds}
                                    imagePathPattern={this.imagePathPattern}
                                    temporaryImage={this.state.temporaryImage}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Drag From</h5>
                                <ImageList
                                    onDragEnd={this.onDragEnd.bind(this)}
                                    drag={this.drag}
                                    imageListIds={this.state.imageListIds}
                                    imagePathPattern={this.imagePathPattern}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <DragAndDropExample/>,
    document.getElementById('root')
);
