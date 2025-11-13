import{
    vars,
    baseurl,
    options
}from './main.js'
import{
    getUI,
}from './getUI.module.js'

export class Games{
    constructor(Category){
        this.getGames(Category);
        vars.links.forEach(link=>{
            link.addEventListener('click',()=>{
                vars.links.forEach(l=>{
                    l.classList.remove('active');
                });
                link.classList.add("active");
                Category=`games?category=${link.id}`
                this.getGames(Category);
            })
        })
    }
    async getGames(Category) {
        vars.loader.classList.remove('d-none');
        let response = await fetch(`${baseurl}${Category}`,options);
        let data = await response.json();
        if(response.ok){
            const ui= new getUI();
            ui.displayGames(data);
        }
    }
}