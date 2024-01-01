import { useState } from "react"

export function TwitterCard({name, username, initialIsFollowing = false}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const following = isFollowing ? "twitter-card-button-follow" : "twitter-card-button-unfollow"
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    const text = isFollowing ? "Siguiendo" : "Seguir"
    
    return (
        <article className="twitter-card-section">
            <header className="twitter-card-header">
                <img
                className="twitter-card-avatar" 
                src= {`https://unavatar.io/${username}`}/>

                <div className="twitter-card-info">    
                    <strong>{name}</strong>
                    <span className="twitter-card-username">
                        @{username}
                    </span>
                </div>
            </header>
            <section className="twitter-card-follow">
                <button onClick={handleClick} className={following}>
                    {text}
                </button>
            </section>
        </article>
    )
}