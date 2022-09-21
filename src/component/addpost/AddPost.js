import React from "react";
import "./AddPost.css";
import { Button, InputLabel, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescriptions] = useState("");
  const locationData = useLocation();

  useEffect(() => {
    if ((locationData.pathname = "./addpost")) {
      let data = locationData.state;
      if (data) {
        setDescriptions(data.body);
        setTitle(data.title);
      }
    }
  }, [locationData]);
  const putApiCall = async () => {
    let id = locationData.state.id;
    let url = `${"https://jsonplaceholder.typicode.com/posts/"}${id}`;
    let payload = JSON.stringify({
      title: title,
      body: description,
      id: locationData.state.id,
      userId: locationData.state.userId,
    });
    console.log(payload, url);
    const data = await fetch(url, {
      method: "PUT",
      body: payload,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let res = await data.json();
    console.log("res", res);
  };
  const apiCall = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: {
        title: title,
        body: description,
      },
    });
    const res = await data.json();
    console.log(res);
  };
  const submitData = () => {
    if (locationData) {
      putApiCall();
    } else {
      apiCall();
    }

    console.log("hhh");
  };
  return (
    <>
      <div className="upper-deck">
        <div className="title"> Add Title and Description</div>
        <InputLabel className="enter-title">Enter Title</InputLabel>
        <TextField
          className="text-field"
          multiline
          maxRows={3}
          autoComplete="off"
          value={title}
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div style={{ marginTop: "5px" }}>
          <InputLabel className="enter-title">Enter Description</InputLabel>
          <TextField
            multiline={true}
            rows={5}
            name="Description"
            placeholder="Description"
            autoComplete="off"
            value={description}
            onChange={(e) => setDescriptions(e.target.value)}
            style={{ width: "50%" }}
          />
        </div>
        <div>
          <Button className="btn-css" onClick={() => submitData()}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddPost;
