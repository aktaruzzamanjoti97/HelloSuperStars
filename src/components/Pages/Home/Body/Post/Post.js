import React from 'react'
import { Users } from '../../../../../DummyData'
import PostContent from './PostContent'

const Post = () => {
    return (
        <>
            {Users.map((u) => (
                <PostContent key={u.id} user={u} />
            ))}
        </>
    )
}

export default Post
