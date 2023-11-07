import { data } from '../../content'
import './assets/style.scss'

let InfoCard = () => {
    let bubble = data.bubbleContent
    let infoItems = bubble.map((bubbleInt) =>
    <article
    className='feature-item'
    key={bubbleInt.title}>
        <img 
        src = {require('./assets/' + bubbleInt.icone.src + '.png')}
        alt = { bubbleInt.icone.alt} 
        className='feature-icon'/>
        
        <h3 
        className='feature-item-title'>
            {bubbleInt.title} 
        </h3>
        <br />
        <p>
            {bubbleInt.content}
        </p>
    </article>
    )

    return (
        <section className='features'>
            {infoItems}
        </section>
    )
}

export default InfoCard