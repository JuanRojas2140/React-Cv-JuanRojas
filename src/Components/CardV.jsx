import "./CardV.scss"
export  default function CardV({item}){
    return(
        
            <div className="c__cardv">
            {item &&
        <figure className="c__cardv-gallery" key={item.name}>
            <p className="c__cardv-gallery-title">{item.name}</p>
            <p>{item.where}</p>
            <p>{item.description}</p>
            {item.date ? <p>{item.date}</p> : null }
            </figure>}
            </div>
    )}