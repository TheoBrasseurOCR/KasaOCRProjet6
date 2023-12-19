import Card from '../Card/Card';

function Gallery(props) {
    return (
        <section className='gallery'>
            {props.accommodations.map((accommodation) => (
                <Card key={accommodation.id} accommodation={accommodation}/>
            ))}
        </section>
    )
}

export default Gallery;