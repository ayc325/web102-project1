import React from "react";
import Cards from './Cards';
const Grid = (props) => {

    return(
        <div className = {'Grid '}>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Cards video = 'https://youtu.be/bYbKeCBzajQ?si=MkZqCtteXPGEbQ46' song = 'TT' details = 'By Twice' color = 'pink' website = 'https://twice.jype.com/'/></td>
                        <td><Cards video = 'https://youtu.be/yntr5bzIFpQ?si=qpzad2Ynqkttm1TC' song = 'Cheer Up' details = 'By Twice' color = 'pink' website = 'https://twice.jype.com/'/></td>
                        <td><Cards video = 'https://youtu.be/8QO3TaTPGiI?si=S5ltVOYiwcXiuNS_' song = 'Likey' details = 'By Twice' color = 'pink' website = 'https://twice.jype.com/'/></td>
                    </tr>
                    <tr>
                        <td><Cards video = 'https://youtu.be/b9zd02hi1ZQ?si=HXXBNh9lZnaMw4gj' song = 'Flower' details = 'By Jisoo' color = 'pink' website = 'https://www.blackpinkmusic.com/'/></td>
                        <td><Cards video = 'https://youtu.be/wg6Spft72ps?si=bS_bHZteYS3f7jCo' song = 'Boom Boom' details = 'By Momoland' color = 'pink' website = 'https://www.instagram.com/momoland_official/'/></td>
                        <td><Cards video = 'https://youtu.be/Ps_Uusz82x8?si=zCOY7MsZFl6iV42R' song = 'Ddu-du Ddu-du' details = 'By Blackpink' color = 'pink' website = 'https://www.blackpinkmusic.com/'/></td>
                    </tr>
                    <tr>
                        <td><Cards video = 'https://youtu.be/WsSHK_grOL4?si=qPyVPZAWMQlj_nRQ' song = 'Anpanman' details = 'By BTS' color = 'blue' website = 'https://www.bts-official.us/#/'/></td>
                        <td><Cards video = 'https://youtu.be/8RT2bg-c3lg?si=qv7Wg_roIIFQqTM2' song = 'Go Go' details = 'By BTS' color = 'blue' website = 'https://www.bts-official.us/#/'/></td>
                        <td><Cards video = 'https://youtu.be/iEvnkvHR3HA?si=mdkoQQxqWQ2ID9B0' song = 'Just One Day' details = 'By BTS' color = 'blue' website = 'https://www.bts-official.us/#/'/></td>
                    </tr>
                    <tr>
                        <td><Cards video = 'https://youtu.be/gfu6vsBH2Ac?si=pHJN2sHYlWGp5Acr' song = 'Bang Bang Bang' details = 'By Big Bang' color = 'blue' website = 'https://www.instagram.com/bigbang_official/'/></td>
                        <td><Cards video = 'https://youtu.be/vtcCAr7YzkE?si=OAzcuaGlM2s5y-Qp' song = 'Really Really' details = 'By Winner' color = 'blue' website = 'https://ygfamily.com/ko/artists/winner/main'/></td>
                        <td><Cards video = 'https://youtu.be/nbkccMu6ABA?si=5_kamPqZVgpa3dOB' song = 'Just Right' details = 'By Got7' color = 'blue' website = 'https://www.instagram.com/got7_isourname/'/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Grid;