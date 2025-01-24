import { Link} from 'react-router-dom';

function SectionLayout({image, headline, sectionText, link}){
   return (
        <div className="section-layout">
            <img src={image} alt="beers homepage section image"/>
            <div className="section-info">
                <Link to={link}><h1>{headline}</h1></Link>
                <p>{sectionText}</p>
            </div>
        </div>
    )
}
export default SectionLayout