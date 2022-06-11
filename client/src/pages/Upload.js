import React, { useState } from 'react'
// import mutation to add data.url to graphql
import { useMutation } from '@apollo/client';
import { ADD_PIECE } from '../utils/mutations';

function Upload() {


    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const uploadImageee = (event) => {
        event.preventDefault();
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "project3")
    data.append("cloud_name","dyktr7yvk")
    fetch(" https://api.cloudinary.com/v1_1/dyktr7yvk/image/upload ",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    setUrl(data.url)
    })


    .catch(err => console.log(err))
    }
    // state for file being uploaded 
    const [fileInputState, setFileInputState] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState();
    // state for typed form info
    const [userInput, setUserInput] = useState({ name: "", description: "", artist: "", collection: "" });

    const handleFileInputChange = (event) => {
        event.preventDefault();
        // allows for multiple files to be uploaded if said .files[0]
        // but, button below is only accepting 1 file at a time
        const file = event.target.files[0];
        
        previewFile(file);
    
        // if we want to preview file on page 6:45 YT
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => { setPreviewSource(reader.result) };
    }

    const handleUserInputChange = (event) => {
    
        const { name, value } = event.target;

        setUserInput({
            ...userInput,
            [name]: value,
        });
    };

console.log("userInput", userInput);
console.log("fileInputState", fileInputState);

    const handleSubmitFile = (event) => {
        event.preventDefault();
        console.log("submitting on click")

        if(!previewSource) return;

        uploadImage(previewSource);
    };

    const uploadImage = async (base64EncodedImage) => {
        // function to upload image here
        // console.log(base64EncodedImage);
        try {

            await fetch("/api/upload", {
                method: "POST",
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { "Content-type" : "application/json" }
            })

        } catch (err) {
            if (err) throw err;
            console.log(err);
        }

    };

    return (

<div className="container mt-5 mb-3">
<div className="columns">
<div className="column is-6 is-flex is-justify-content-center">
    <form className="is-flex is-flex-direction-column">
        {/* form input for name, description, collectionId, artist (not required) */}
        {/* then it will push data.url with all this info into our mondoDB thru mutation */}
        {/* looks like I need a "collections" drop down menu? or the ability to ADD a new collection */}
        <p className="uploadLabel is-size-5 has-text-weight-semibold">Piece Name</p>

        <input className="mt-2 mb-2 input" name="name" type="text" id="name" placeholder="Piece Name" value={userInput.name} onChange={handleUserInputChange}>
        </input>

        <p className="uploadLabel is-size-5 has-text-weight-semibold">Description</p>

        <input className="mt-2 mb-2 input" name="description" type="text" id="description" placeholder="Description" value={userInput.description} onChange={handleUserInputChange}>
        </input>

        <p className="uploadLabel is-size-5 has-text-weight-semibold">Artist Name</p>

        <input className="mt-2 mb-2 input" name="artist" type="text" id="artist" placeholder="Artist Name" value={userInput.artist} onChange={handleUserInputChange}>
        </input>

        <p className="uploadLabel is-size-5 has-text-weight-semibold">Collection Name</p>

        <input className="mt-2 mb-3 input" name="collection" type="text" id="collection" placeholder="Collection Name" value={userInput.collection} onChange={handleUserInputChange}>
        </input>

        <input className="mt-2 mb-3" type="file" name="image" value={fileInputState} onChange={handleFileInputChange}>
        </input>

        <button className="button is-dark is-responsive" type="submit" onClick={handleSubmitFile}>Upload</button>

    </form>

</div>
        {/* right side of forum to preview the image you are uploading */}
    <div className="column is-6 is-flex is-align-items-center is-flex-direction-column">
        <div className="">
            <h2 className="is-size-5 mb-3 has-text-centered">Preview</h2>
            
            {previewSource && (
                <img src={previewSource} alt="preview" style={{height: "300px" }} />
            )}
            
            {/* anything above 300px height will look too distorted on full-width images */}
        </div>
    </div>
    </div>
</div>

);
};

export default Upload;
// what is the purpose of the upload component
// to upload media to cloudinary
    // upload file button invokes the upload image function
    // this function takes the image and should send it to OUR server --> graphql front end mutation-> UPLOAD_IMAGE
    //upload image is instructed to take the form data which includes name, description, artist, and collection and the actual media as well and the appolo client then proxies the graphql server which has upload image resolver and corresponding typedef
    // our server middlemans teh request (handled by the upload_image resolver) and forwards it to the cloudinary api url above
    // inside the resolver -- fetch( https://api.cloudinary.com/v1_1/dyktr7yvk/image/upload ",{method:"post", body: data})
    //cloudinary recieves request  from resolver and handles the upload. it responds with data about where it is stored
    // our server intercepts the response --- still inside the resolver and looks at the data and talks to our db to save the important image data (url source and who uploaded?)

    // .then(response => {User.findOneAndUpdate(user_id, collection: {$set: dataToAddAboutImage})})

    // db receieves request with data and stores it in correct collection and sends successful response back to server
    // .then(dbResponse => res.json(dbResponse))
    //server gets response from db and responsed to the client finally

//front end mutation was receieved and responded to
// back on client
    // the media was successfully uploaded, update image element with source url of uploaded image
    // the media was rejected---inform user


// inputs need onChange funciton/handler

// need a function to add_piece taking in data as argument to grab URL 

// button onClick also needs something

// grab piece name

// grab description of piece

// grab artist name

// check to see if collection exists

// if collection does NOT exist make a new collection with that collection name

// reroute from uplaod page to their user profile / dashboard / whatever 