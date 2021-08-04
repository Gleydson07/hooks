import { useEffect, useState } from "react"
import Item from "./item"

interface PostProps {
    id: number,
    title: string,
    body: string
}

export function MemoExample(){
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            response.json()
            .then(data => setPosts(data))
        })
    }, [posts])

    return (
        <div>
            <h1>memo - Usado para evitar que um componente seja renderizado desnecessariamente:</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            {posts.map((post:PostProps) => (
                <ul key={post.id}>
                    <Item title={post.title} body={post.body}/>
                </ul>
            ))}
        </div>
    )
}