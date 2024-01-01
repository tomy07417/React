import {TwitterCard} from './TwitterCard.jsx'

export function App() {
    return (
        <section className='twitter-card'>
            <TwitterCard 
            name="Tomas Francisco Amundarain" 
            username="Tomasamunda"
            initialIsFollowing/>
            <TwitterCard 
            name="Simon Amundarain" 
            username="Monchi"/>
        </section>
    )
}