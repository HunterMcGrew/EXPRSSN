import React, { useState } from 'react'
// import mutation to add data.url to graphql
import { useMutation } from '@apollo/client';
import { ADD_PIECE } from '../utils/mutations';

function Upload() {


    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const uploadImage = (event) => {
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

    return (

<div className="container ">
<div className="is-flex is-justify-content-center">
    <form className="is-flex is-flex-direction-column">
        {/* form input for name, description, collectionId, artist (not required) */}
        {/* then it will push data.url with all this info into our mondoDB thru mutation */}
        {/* looks like I need a "collections" drop down menu? or the ability to ADD a new collection */}
        <p>Piece Name</p>
        <input className="mt-3 mb-3" type="text" id="name"></input>
        <p>Description</p>
        <input className="mt-3 mb-3" type="text" id="description"></input>
        <p>Artist Name</p>
        <input className="mt-3 mb-3" type="text" id="artist"></input>
        <p>Collection Name</p>
        <input className="mt-3 mb-3" type="text" id="collection"></input>
        <input className="mt-3 mb-3" type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
        <button onClick={uploadImage}>Upload</button>
    </form>
</div>
    <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url}/>
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

    // .then(response => {User.findOneAndUpdate(user_id, images: {$set: dataToAddAboutImage})})

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