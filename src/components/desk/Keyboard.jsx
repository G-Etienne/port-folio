//------------------------------------------------------
//Data keyworld
import keyData from "../../data/key.json";
//------------------------------------------------------
//Letters for the keyboard
import Key from "./Key";
//------------------------------------------------------
//style
import "../../styles/components/desk/_keyboard.scss";
import "../../styles/components/desk/desk-media/_keyboardMediaQueries.scss";
//------------------------------------------------------
function Keyword() {
    return (
        <>
            <div className="keyboard">
                {/*touches of the keyboard */}
                {keyData.map((item) => (
                    <Key keyLetter={item.key} />
                ))}
            </div>
            {/* thickness of the keyboard */}
            <div className="keyboard__front"></div>
        </>
    );
}

export default Keyword;
