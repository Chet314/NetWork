import React from "react";

export class FileInput extends React.Component {

onFileChange = (e) => {
    const {input} = this.props
    const targetFile = e.target.files[0];
    if(targetFile) {
        input.onChange(targetFile)
    } else {
        input.onChange(null)
    }
}
    render(){
return(
    <input type = "file" onChange = {this.onFileChange} accept = ".jpg, .png, .jpeg" />
);
    };
};