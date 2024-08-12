import { useState } from 'react'
import "./HowTo.css"

const HowTo = ({ setPage }) => {

    const [ isTestOpen , setIsTestOpen ] = useState(false);

    return (        
        <div className='howto'>
            <div><button className='btn' onClick={() => setPage(true)}>ゲームに戻る</button></div>
            <h1>レッドドッグの遊び方</h1>
            <h2>---- 基本ルール ----</h2>
            <div>
                <div>3枚目に配られたカードの数字が</div>
                <div>先に配られた2枚のカードの数字の間だったら勝ち！</div>
                <div>というゲームです</div>

                <br />
                <div>【勝ちの例】</div>
                <div>1枚目: 3</div>
                <div>2枚目: 9</div>
                <div>3枚目: 5</div>
                <div className='cards'>
                    <img
                        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2NDsxeLe22kW9_BT7w48MRNnV4oMk4WhiMcIvz5sLI0dNGmCvE-jl4bBYmTr3GoPs3rV3a4R4GphD-0kx1CiZ1-Witg-Cn3dXS3319coTVOcbslDH3AoA1VbFdXVoWScFooJFdiz2nVsk/s800/card_diamond_03.png'
                        className='card1'
                        alt=""
                    />
                    <img
                        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnjFSjp-TDjjfZJDfu0gmM4z6e68a-ENqUIIWctApWUaJEWBIF9xlF-ryeYPG2yDIbB5rzYphdS-9X4eYknCzh-95Zzf0NIWwj2sv21lL74PJKd9SGunLTuqQzi9K0FOkmle4zuJfIfPVM/s800/card_heart_05.png'
                        className='card3'
                        alt=""
                    />
                    <img
                        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOJGJ-kqHsLKZHbJfqkIkdGwvw8XhkEwL1ksnmeY7bHCKYst7wwE5i8xGV_cdi16d2RMsfSHd9o48JxNVNoA0lZMRtow5seQRbiwqnmUJBMsqLgjiQcAWgWbqmPVMYTsAuaGAQwk2HQgMu/s800/card_spade_09.png'
                        className='card2'
                        alt=""
                    />
                </div>
                <div>※マークは関係ありません</div>
                <div>※2枚目(右側)の方が小さい数字の場合でも同様</div>

                <br />
                <div>【数字の順番】</div>
                2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → J → Q → K → A
            </div>

            <h3>--- その他ルール ---</h3>
            <div>
                <div>【先に配られた2枚が連続していた場合】</div>
                <div><div style={{'fontWeight' : 'bold'}}>引き分け</div>(間に入る数字がないため)</div>
                <div className='cards'>
                    <img
                        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZpBsBHzea5346SN4Bl8PDwszvM4ovkTHW_IXTukvhVZQ-_DnzUas7aJRy5XPkVoDnDiurYkpi0JTuaGvyn0APCe46X9iFzNaGgOgMKmJ-k1MU_ro1Cox0Iu33mMtNSovMcJLKYBNrUl-t/s800/card_club_03.png'
                        className='card1'
                        alt=""
                    />
                    <img
                        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUCE0FkJ5HUq_NFpqPB9GCMfqxgsOtEptXJCdlHe8ES8HkwGRfe5U3hQZoR_4RqFn-u2BYwNc9jUOHtgI0uUEAEjQsD3TZFzH-8fJHlEk29YHHkUe0oOSC4E9wUefe0c2BA88eORbO8ylj/s800/card_back.png'
                        className='card3'
                        alt=""
                    />
                    <img
                        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiR74T3ku2YRGM2SCzQvQ11z8QjRc05PdarOTecrmrkV3Q6Fty7gJ-XRPraxA2gbkusPxYsuYVomwG6oUv91TRQi2AChDEe5KT6J23Ot_irfpfVKPjSiCbxqMWbEmrOYl0RKWAwOPYVrSMo/s800/card_heart_04.png'
                        className='card2'
                        alt=""
                    />
                </div>

                <br />
                <br />
                <div>【先に配られた2枚がペア場合】</div>
                    <div>・3枚目も同じ数字の場合 → <em style={{'color' : 'red','fontWeight' : 'bold'}}>勝ち！</em></div>
                    <div className='cards'>
                        <img
                            src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSVy56fpOdMWjW7JRoTnuzUisXaKD9oWiexP-uDPDBo2p2xKwmbYVaeBFxD7SiU4GC3fvchi8ZEJ8j-aA7DmTpqNcDWNj7CiwfsSTnQ558CesoqH04ivDLzCp1ewZZksQxX5jf2jud5TJH/s800/card_club_06.png'
                            className='card1'
                            alt=""
                        />
                        <img
                            src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeuayj1QgbnvlIrod-G_xMdBnxHY0JR7deFe5xS59zqajiH-tyUfw2c572Hsqw8r9f1zdjzxBcG7ITm5ODHEhFYz0a25ddSiQVGNamlE2kU2QQTQDkzPn5p2LiZh6jZyltzBjrBYwthtVu/s800/card_diamond_06.png'
                            className='card3'
                            alt=""
                        />
                        <img
                            src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQ5Bqe_2DclEubYO40pSb106srvDZl-i_fXE6xdYAsg5ZgHGw2hTIgAN_x2-jNjsUWi2xqPtyXpR_AZe9HurXVcwQ4es9MNRo71NOGd-_P_7H4mRig10lRWdFts8Fs3-oMQQ7jD6HcYspW/s800/card_spade_06.png'
                            className='card2'
                            alt=""
                        />
                    </div>
                    <div>・3枚目が違う数字の場合 → <em style={{'fontWeight' : 'bold'}}>引き分け</em></div>
                    <div className='cards'>
                        <img
                            src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiigxeATOR1vZg-msbYevcViZqWh7CdIXFunD5y-DVySKCWoUc0rN6tF_-hSahYTdnNY1U5gXTLv2qtmqH29ea4MZwj0__5bH0Tdd8QpH2hSqlPHqZH4WmWTVQb2KRoUoQA_0ZmPv0aOpZ/s800/card_club_11.png'
                            className='card1'
                            alt=""
                        />
                        <img
                            src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgksE3RYxFyrKYNJ_MBzgSzHuSdsvSx-2i-asUg6R2t8cTP5gKqqW84ctT96KDyAyni2FVLbNeuYy9wvifdgx3FxE_00QoGz0vSIODUgUk9PV8pnHdqptsWv-OtC7WH2SMmePx9kFbgMrmJ/s800/card_heart_10.png'
                            className='card3'
                            alt=""
                        />
                        <img
                            src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnvQfeGeSRoo3waeZ-DfnWKMHiRKTxaQPaRtVB97knDRKh0MEMjZea7FpdMN40puf-70Ng3th58eWYsxOR3KLqh8I_ac_xpPjhIUvY08q2_5fNTTXN9pTkikSvbBFL559IYJHfTYpKMt6E/s800/card_diamond_11.png'
                            className='card2'
                            alt=""
                        />
                    </div>
            </div>

            <h3>--- 配当 ---</h3>
            <div>【ペアの場合】</div>
            <div>3枚全て同じ数字 : <em style={{'color' : 'red', 'fontWeight' : 'bold'}}>12倍</em></div>
            <div>その他 : 1倍 (引き分け)</div>
            <br />
            <div>【連続の場合】</div>
            <div>1倍 (引き分け)</div>
            <br />
            <div>【その他】</div>
            <div>有効な数字の数によって変化</div>
            <div>1つ : <em style={{'color' : 'red', 'fontWeight' : 'bold'}}>6倍</em></div>
            <div>2つ : <em style={{'color' : 'blue', 'fontWeight' : 'bold'}}>5倍</em></div>
            <div>3つ : <em style={{'color' : 'green', 'fontWeight' : 'bold'}}>3倍</em></div>
            <div>4つ以上 : <em style={{'color' : 'brown', 'fontWeight' : 'bold'}}>2倍</em></div>

            <h3>--- ゲームの流れ、ボタン ---</h3>
            <div>1. 賭けPtを決める</div>
            <div style={{'height' : '35px'}}>
                <button className='add10'>+10</button>
                <button className='minus10'>-10</button>
                <button className='add100'>+100</button>
                <button className='minus100'>-100</button>
            </div>
            <div className='decide'>
                <button className='decideButton'>決定</button>
            </div>
            <br/>
            <div>2. カードが2枚配られた後</div>
            <div>倍賭けをするか決める</div>
            <div style={{'fontSize' : '12px'}}>※「その他ルール」に該当するパターンでは省略</div>
            <div className='cards'>
                <img
                    src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIFtPPeLUE71rAaxy9GCXMpcLTe5xrKpJ1umnrjTXu1blrQ8nSO_5CJ3U5lHN49p7CBRfHmTYyZylgM2ZSw6sjlUqEr9P4hInVp-Sa8R3llAyOx48b0gXzt8bAQCKrRQZ8UNVnau3IpzEF/s800/card_spade_02.png'
                    className='card1'
                    alt=""
                />
                {isTestOpen ?
                    <img
                        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaKrSnV7GsU65gpkC3OrfzmbUdkCq7wVVCtt7B7lsZqSfrqHaZFUtlnmIZuJkvU5EqBOF8cMJePdJDfGxFc2K7DgavW_glB48bcSsluvmIhAFhTnQT6DGwECwElLvL_bk_icQk0PjX7ljy/s800/card_spade_07.png'
                        className='card3'
                        alt=""
                    />
                    :
                    <img
                        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUCE0FkJ5HUq_NFpqPB9GCMfqxgsOtEptXJCdlHe8ES8HkwGRfe5U3hQZoR_4RqFn-u2BYwNc9jUOHtgI0uUEAEjQsD3TZFzH-8fJHlEk29YHHkUe0oOSC4E9wUefe0c2BA88eORbO8ylj/s800/card_back.png'
                        className='card3'
                        alt=""
                    />
                }
                <img
                    src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLQGB2Gg19QADfwiCNcfWXuh0VETbQROmxC9oSnfhWdJr9w7NYpsSj_SG-oIq0NR02CZKaieC1586jxTZ70NI2-zYQVAV7pr97Nya71i9gTmp76J3vSn_QGEikJgajdBXXYJB_tc7wPtyA/s800/card_heart_01.png'
                    className='card2'
                    alt=""
                />
            </div>
            <div style={{'height' : '30px'}}>
                <button className='raize'>倍賭け</button>
                <button className='stand'>そのまま</button>
            </div>
            <br/>
            <div>3. 3枚目のカードをめくる</div>
            <div>
                <button className='trunCard' style={{'background': '#87befd', 'borderBottom': 'solid 3px #679ebb'}} onClick={() => setIsTestOpen(!isTestOpen)}>
                    OPEN
                </button>
            </div>
            <div>※ボタンの色が青以外の時はチャンス！</div>

            <br />
            <div><button className='btn' onClick={() => setPage(true)}>ゲームに戻る</button></div>

            <br />
            <div>
                <div>使用したフリー素材</div>
                <br />
                <div>・Loose Drawing</div>  
                <div>https://loosedrawing.com/</div>  
                <div>犬のイラストで使用</div>
                <br />
                <div>・いらすとや</div>
                <div>https://www.irasutoya.com/</div>  
                <div>カード(トランプ)のイラストで使用</div>
            </div>
        </div>

    )
}

export default HowTo