import Props from "../props/Props"
import "./Main.scss"
import Samsung from "../../assets/images/samsung.png"
import home from "../../assets/images/Home.png"
import television from "../../assets/images/television.png"

const Main = () => {
    return (
        <div>
            <Props
                title="Mobile & Computing"
                brend="Galaxy S24 Ultra"
                description="Get up to $750 trade-in θ or up to $275 off without. Plus, double the storage on us.Ω"
                learn_btn="Learn more"
                Buy_btn="Buy now"
                image={Samsung}
            />
            <Props
                title="TV & Audio"
                brend="Let’s make this super clear"
                description="Save $2,200 on an 85 Class Samsung Neo QLED 8K QN900D and get our best picture in a huge range of contrast and color with Neo Quantum HDR 8K Pro."
                learn_btn="Learn more"
                Buy_btn="Buy now"
                image={television}
            />
            <Props
                title="Home Appliances"
                brend="Get the best deals of the season"
                description="Make the holidays brighter with early Black Friday deals on Bespoke appliances and save $1,700."
                learn_btn="Learn more"
                Buy_btn="Shop now"
                image={home}
            />

        </div>
    )
}

export default Main