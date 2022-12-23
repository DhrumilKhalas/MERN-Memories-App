import mongoose from "mongoose";
import PostMessage from "../models/postMessageModel.js";

export const getPosts = async (req, res) => {
    let postMessages;
    try{ 
        postMessages = await PostMessage.find()
    }catch(err){
        return console.log(err);
    }
    if(!postMessages){
        return res.status(404).json({"Message":"No Posts Found!"})
    }
    return res.status(200).json(postMessages);
}

export const createPost = async (req, res) => {
    let newPost;
    try{
        newPost = await new PostMessage(req.body)
    }catch(err){
       return console.log(err);
    }
    if(!newPost){
        return res.status(500).json({"Message":"Unable To Create New Post!"})
    }
    try{
        await newPost.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(201).json(newPost);
}

export const updatePost = async (req, res) => {
    const {id:_id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No post with that id!")
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new:true})
    res.json(updatedPost)
}

export const deletePost = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No post with that id!")
    }

    await PostMessage.findByIdAndRemove(id)


    res.json({"Message":"Post Deleted Successfully!"})
}

export const likePost = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No post with that id!")
    }

    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new:true})

    res.json(updatedPost)

}