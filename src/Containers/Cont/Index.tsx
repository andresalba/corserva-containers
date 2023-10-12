import "./Cont.scss";
import Hbanner from "../Hbanner/Index";
import Central from "../Central/Index";
import Fbanner from "../Fbanner/Index";

function Cont() {

    return (
        <div className="cont">
            <Hbanner />
            <div className="cont-sub">
                <Central />
                <Fbanner />
            </div>
        </div>
    )
}

export default Cont;