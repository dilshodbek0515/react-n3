import "./Props.scss"
const MOBILE = ["Galaxy S24 Ultra", "Galaxy Z Fold6", "Galaxy Z Flip6", "Galaxy Tab S10 Series", "Galaxy Watch Ultra"]
const Props = (
    {
        title,
        brend,
        description,
        Buy_btn,
        learn_btn,
        image
    }
) => {
    const mobile = [
        MOBILE?.map((items) => (
            <li className="mobile_item">{items}</li>
        ))
    ]
    return (
        <section className="mobile">
            <h2 className="mobile_text">{title}</h2>
            <ul className="mobile_content">
                {mobile}
            </ul>
            <img className="mobile_img" src={image} alt="mobile_img" />
            <h2 className="mobile_brend">{brend}</h2>
            <p className="mobile_description">{description}</p>
            <div className="btn_content">
                <button className="mobile_btn1">{learn_btn}</button>
                <button className="mobile_btn2">{Buy_btn}</button>
            </div>
        </section>
    )
}

export default Props