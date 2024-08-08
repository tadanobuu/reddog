import { useState } from 'react'
import Header from './components/Header'
import Character from './components/Character'
import Message1 from './components/Message1'
import Cards from './components/Cards'
import Message2 from './components/Message2'
import Buttons from './components/Buttons'
import BetPointDisp from './components/betPointDisp'
import "./Main.css"
import Message3 from './components/Message3'
import Message4 from './components/Message4'
import Guidance from './components/Guidance'

const Main = ({ setPage }) => {

    // ルール説明を含むキャラクターのメッセージの表示をセクションで1度だけにする
    const [ noGuidance , setNoGuidance ] = useState(sessionStorage.getItem('guidance'));

    const clearButtonHandler = () => {
        setNoGuidance(true);
        sessionStorage.setItem('guidance', 'true');
    }

    return (
        <div className='main'>
            <Header setPage={setPage} />
            <Character />
            {!noGuidance ? 
                <div className='table'>
                    <Guidance />
                    <div className='clearGuidance'>
                        <button className='clearButton' onClick={() => clearButtonHandler()}>
                            ゲームを始める
                        </button>
                    </div>
                </div>
                :
                <>
                <div className='table'>
                    <Message1 />
                    <Message4 />
                    <Cards />
                    <Message2 />
                    <Message3 />
                    <BetPointDisp />
                </div>
                <Buttons /> 
                </>
            }
        </div>
    )
}

export default Main