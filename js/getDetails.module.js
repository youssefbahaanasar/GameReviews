import{
    vars,
    baseurl,
    options,
} from './main.js'
import{
    getUI,
}from './getUI.module.js'
export class Details{
    constructor(gamesSection){
        this.section=gamesSection;
        vars.gamesList.addEventListener('click',(e)=>{
        const gameId = e.target.closest('.card');
        if(gameId){
            this.getDetails(gameId.id);
        }
        })
        vars.btnClose.addEventListener('click',()=>{
            vars.gameDetails.classList.add('d-none');
            this.section.classList.remove('d-none');
        });
    }
    async getDetails(id) {
        this.section.classList.add('d-none');
        vars.loader.classList.remove('d-none');
        let response = await fetch(`${baseurl}game?id=${id}`,options);
        let data = await response.json();
        if(response.ok){
            const myUI=new getUI();
            myUI.showDetails(data);
        }
    }
}