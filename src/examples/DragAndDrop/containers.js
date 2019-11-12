import React from "react";

export let SelectedContainer = (props) => {
    return (
        <div onDragOver={props.allowDrop}
             onDrop={props.drop}
             style={{minHeight: 200, border: '1px solid red'}}>
            Drop here
            <hr/>
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
                    onDragStart={() => props.drag(imageId)}
                    src={props.imagePathPattern.replace('__ID__', imageId)}
                    style={{padding: '15px'}}
                />
            )
        })
    );
};
