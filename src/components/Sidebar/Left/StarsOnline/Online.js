import React from 'react'

export default function Online({user}) {
return (
<>

    <div className="accordion-header chatListname" id="headingTwo">

        <div className="d-flex">
            <div className="containerOnline">

                <img src={`/${user.profilePicture}`} className=" SidebarStarListImage" alt="profilePicture" />

                {/* <div class="onLineMo">🟢</div> */}

            </div>
            <div className="col-md-9  mt-2">
                <span className='chatName'>{user.username}</span>

            </div>
        </div>

        <span>

        </span>

    </div>
</>
)
}