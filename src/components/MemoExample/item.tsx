import React, { memo } from "react"

interface ItemProps {
    title: string,
    body: string
}

function Item({title, body}: ItemProps){
    return (
        <li style={{margin: "0.5rem", padding: "0.25rem"}}>
            <h4>{title}</h4>
            <p>{body}</p>
        </li>
    )
}

export default memo(Item);