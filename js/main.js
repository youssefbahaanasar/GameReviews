import {Games} from './getGames.module.js'
import {Details} from './getDetails.module.js'
export {
 vars,
 baseurl,
 options,
 endnode
};
let vars={
 gamesList:document.querySelector('#gamesList'),
 loader:document.querySelector('.loading'),
 gameDetails:document.querySelector('.gameDetails'),
 btnClose:document.querySelector('#btnClose'),
 gameImage:document.querySelector('#gameImage'),
 gameTitle:document.querySelector('#gameTitle'),
 gameCategorey:document.querySelector('#gameCategorey'),
 gamePlatform:document.querySelector('#gamePlatform'),
 gameStatus:document.querySelector('#gameStatus'),
 gameDesc:document.querySelector('#gameDesc'),
 gameUrl:document.querySelector('#gameUrl'),
 links:document.querySelectorAll('.nav-link'),
 content:document.querySelector('#content'),
}
const baseurl ='https://free-to-play-games-database.p.rapidapi.com/api/';
let endnode="games?category=MMORPG";
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '0288058ac8msha516e0917e1040cp1ffd4bjsn2c7d7ef13f62',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

const myGames= new Games(endnode);
const myDetails= new Details(vars.content);