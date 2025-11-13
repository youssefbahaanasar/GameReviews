import{
    vars
}from './main.js';

export class getUI{
    
    displayGames(games){
        let cartona ='';
        for (let i = 0; i < games.length; i++) {
            cartona+=`
            <div class="col-lg-3 col-md-6 g-4 game">
              <div id="${games[i].id}" class="card p-0 h-100 bg-transparent text-white">
                <div class="card-body">
                <img src="${games[i].thumbnail}" class="card-img-top mb-4" alt="...">
                  <h3 class="card-title d-flex justify-content-between">
                    ${games[i].title}
                    <a href="#" class="btn btn-primary m-0 p-1">Free</a>
                  </h3>
                  <p class="card-text text-center opacity-50">${games[i].short_description}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <span class="badge">${games[i].genre}</span>
                  <span class="badge">${games[i].platform}</span>
                </div>
              </div>
            </div>
            `
        }
        vars.gamesList.innerHTML=cartona;
        vars.loader.classList.add('d-none');
    }
    showDetails(details){
        vars.gameTitle.innerHTML=`Title: ${details.title}`;
        vars.gameImage.src=details.thumbnail;
        vars.gameDesc.innerHTML=details.description;
        vars.gamePlatform.innerHTML=details.platform;
        vars.gameCategorey.innerHTML=details.genre;
        vars.gameStatus.innerHTML=details.status;
        vars.gameUrl.href=details.game_url;
        vars.gameDetails.classList.remove('d-none');
        vars.loader.classList.add('d-none');
    }
}