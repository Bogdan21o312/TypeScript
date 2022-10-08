import React, {useEffect, useState} from 'react';
import {postAPI} from "../sevices/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit)

    useEffect(() => {
        setTimeout(() => {
            setLimit(2)
        }, 2000)
    }, [])

    return (
        <div className="post__list">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error when loading</h1>}
            {posts && posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostContainer;