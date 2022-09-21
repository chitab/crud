import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  ButtonGroup,
} from "@mui/material";
const Dashboard = () => {
  const [posts, setPost] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    apiCall();
  }, []);
  const onUpdate = (item) => {
    history("/addpost", { state: item });
  };
  const apiCall = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await data.json();
    console.log(res);
    setPost(res);
  };
  const deleteApiCall = async (item) => {
    let id = item.id;
    let url = `${"https://jsonplaceholder.typicode.com/posts/"}${id}`;
    let payload = JSON.stringify({
      title: item.title,
      body: item.description,
      id: id,
      userId: item.userId,
    });
    console.log(payload, url);
    const data = await fetch(url, {
      method: "DELETE",
      body: payload,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let res = await data.json();
    apiCall();
    console.log("res", res);
  };
  const onDelete = (item) => {
    deleteApiCall(item);
  };
  return (
    <>
      <div>
        <span className="all-data">All Post Data</span>
      </div>
      <div style={{ margin: "20px" }}>
        <Grid container spacing={2}>
          {posts &&
            posts.map((item) => {
              return (
                <Grid item xs={12} key={item.id}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.body}
                      </Typography>
                      <div style={{ marginTop: "5px" }}>
                        <ButtonGroup varient="contained" color="secondary">
                          <Button onClick={() => onUpdate(item)}>Update</Button>
                          <Button onClick={() => onDelete(item)}>Delete</Button>
                        </ButtonGroup>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
