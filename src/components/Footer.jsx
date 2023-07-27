import '../styles/layout/_footer.scss';
import Key from '../components/Key';

function Footer(){
    return(
        <> 
            <footer className='footer'>
                <div className='footer__desk'>
                    <div className='footer__desk__keyboard'>
                        <Key text={"A"}/>
                        <Key text={"Z"}/>
                        <Key text={"E"}/>
                        <Key text={"R"}/>
                        <Key text={"T"}/>
                        <Key text={"Y"}/>
                        <Key text={"U"}/>
                        <Key text={"I"}/>
                        <Key text={"O"}/>
                        <Key text={"P"}/>
                        <Key text={"^"}/>
                        <Key text={"$"}/>
                        <Key text={"Q"}/>
                        <Key text={"S"}/>
                        <Key text={"D"}/>
                        <Key text={"F"}/>
                        <Key text={"G"}/>
                        <Key text={"H"}/>
                        <Key text={"J"}/>
                        <Key text={"K"}/>
                        <Key text={"L"}/>
                        <Key text={"M"}/>
                        <Key text={"Ù"}/>
                        <Key text={"`"}/>
                        <Key text={"<"}/>
                        <Key text={"W"}/>
                        <Key text={"X"}/>
                        <Key text={"C"}/>
                        <Key text={"V"}/>
                        <Key text={"B"}/>
                        <Key text={"N"}/>
                        <Key text={"B"}/>
                        <Key text={"N"}/>
                        <Key text={","}/>
                        <Key text={";"}/>
                        <Key text={":"}/>
                        <Key text={"="}/>
                        <Key text={"&"}/>
                        <Key text={"É"}/>
                        <Key text={'"'}/>
                        <Key text={"'"}/>
                        <Key text={"("}/>
                        <Key text={"§"}/>
                        <Key text={"È"}/>
                        <Key text={"!"}/>
                        <Key text={"Ç"}/>
                        <Key text={"À"}/>
                        <Key text={")"}/>
                        <Key text={"-"}/>
                        <Key text={"1"}/>
                        <Key text={"2"}/>
                        <Key text={"3"}/>
                        <Key text={"4"}/>
                        <Key text={"5"}/>
                        <Key text={"6"}/>
                        <Key text={"7"}/>
                        <Key text={"8"}/>
                        <Key text={"9"}/>
                        <Key text={"@"}/>
                        <Key text={"#"}/>
                        <Key text={"&"}/>
                        <Key text={">"}/>
                        <Key text={"+"}/>
                        <Key text={"/"}/>
                        <Key text={"-"}/>
                        <Key text={"_"}/>
                        <Key text={"°"}/>
                        <Key text={"§"}/>
                        
                    </div>
                    <div className='footer__desk__keyboard__front'></div>
                    <div className='footer__desk__mousepad'>
                        <div className="footer__desk__mouse">
                            <div className="footer__desk__mouse-one"></div>
                            <div className="footer__desk__mouse-two"></div>
                        </div>
                    </div>
                </div>
                <div className='footer__desk__front'>
                </div>
                <div className='footer__desk__under-top'>
                    <div className='footer__desk__drawer'>
                        <div className='footer__desk__drawer__grip'>
                        </div>
                    </div>
                </div>
            </footer>      
        </>
    );
}

export default Footer;