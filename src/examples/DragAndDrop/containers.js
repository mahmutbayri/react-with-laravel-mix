import React from "react";

export let SelectedContainer = (props) => {
    return (
        <div onDragOver={props.allowDrop}
             onDrop={props.drop}
        >
            {
                props.selectedIds.map(imageId => {
                    return <img
                        height={100}
                        key={imageId}
                        src={props.imagePathPattern.replace('__ID__', imageId)}
                        style={{padding: '15px'}}
                    />
                })
            }
            {
                props.temporaryImage ?
                    <img
                        height={100}
                        src={props.imagePathPattern.replace('__ID__', props.temporaryImage)}
                        style={{opacity: 0.1, padding: '15px', border: '1px solid red'}}
                    />
                    : ''
            }
        </div>
    );
};

export let ImageList = (props) => {
    return (
        props.imageListIds.map(imageId => {
            return (
                <img
                    draggable
                    key={imageId}
                    onDragEnd={props.onDragEnd}
                    onDragStart={() => props.drag(imageId)}
                    src={props.imagePathPattern.replace('__ID__', imageId)}
                    style={{padding: '5px', width: '100%'}}
                />
            )
        })
    );
};
