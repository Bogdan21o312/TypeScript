import React, {useEffect, useState} from 'react';
import {postAPI} from "../sevices/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(8)
        // }, 2000)
    }, [])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div className="post__list">
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error when loading</h1>}
            {posts && posts.map(post =>
                <PostItem remove={handleRemove} update={handleUpdate } post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostContainer;