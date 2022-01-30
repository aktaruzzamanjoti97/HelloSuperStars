import React, { useState, useEffect } from 'react';
import axios from "axios";
import CategoryContent from './CategoryContent';

const CategoryMap = () => {

const [posts, setPosts] = useState([])
const [status, setstatus] = useState(true)

useEffect(() => {
let isMounted = true;
axios.get('api/user/getAllLiveChatEventWith').then(res =>{

if(isMounted)
{
if(res.data.status === 200)
{
// setLiveChat(res.data.livechats);
setInterval(() => {
setPosts(res.data.livechats);
setstatus(false);
}, 300);
// console.log(res.data.livechats);

}
}
});
}, []);

return (
<>
    <div className="fl2-sc">

        <div className="col-12 row d-flex mainCat-follow">

            {posts && posts.map((data) => (
            <CategoryContent key={data.id} post={data} />
            ))}

        </div>

    </div>
</>
)
}

export default CategoryMap