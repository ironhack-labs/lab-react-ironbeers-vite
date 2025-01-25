import { Link } from "react-router-dom"


function OptionCard({heroImg, title, text, link}) {
  return(
  <div className="col-sm-10">
    <Link to={link}>
    <img src={heroImg} alt="" />
    <h2>{title}</h2>
    </Link>

    <p>{text}</p>
  </div>
  )
}
export default OptionCard