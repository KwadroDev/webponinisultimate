fetch('https://lilhv10-default-rtdb.firebaseio.com/CardsNFT.json')
    .then(response => response.json())
    .then(data => {
        createCards(data.CardsNFT)
    });

function createCards(data) {
    let groupCard = document.querySelector('.groupCard')
    data.forEach(data => {
        groupCard.innerHTML += /*html*/`
        <div class="cardContainer hide">
                  <div class="content" style="padding-right: 0px; padding-left: 0px; width: 20em;">
                    <div style="width: 80%; padding-top: 3rem;">                
                      <div class="item-card card" style="border-radius: 24px;">
                        <div class="card-body" style="height: 450px; border-radius: 25px;">
                          <div class="img-card" style="height: 293px; width: 100%; border-radius: 24px;">
                            <a href="/item/0xdb0047cb1dfc44696f6e9868ef6bb40000280b05/3" style="text-decoration: none;">
                              <img src="https://storage.googleapis.com/apinft/e38cdff2d8848c9c557ea20ac736550a7b8e75be" style="position: absolute; margin: auto; inset: 0px 0px 111px; max-width: 100%; max-height: 293px;">
                            </a>
                          </div>
                          <div style="padding-left: 10px; padding-right: 30px; height: 78px; width: 100%; left: 0px; bottom: 40px; position: absolute; display: inline-block; line-height: 25px;">
                            <p class="mb-1" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 18px; font-weight: 600;">${data.name}</p>
                            <div class="mb-2 collection-card-text text-gradient mr-4" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 600; font-size: 13px; max-width: 80%;">
                              <p class="text-verified"><img class="mr-2" src="https://cdn.worldvectorlogo.com/logos/google-verified-1.svg" style="width: 15px; height: 15px;"><a href="" target="_blank">Poninis</a></p>
                            </div>
                            <div class="listing-text mr-4 my-auto subheadingColor" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 600; font-size: 12px;">
                              <p><img src="https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png" style="width: 18px; height: 18px; margin-bottom: 1px; margin-right: 6px; border-radius: 50%;">1 listing from 0.05 MATIC</p>
                            </div>
                            <div class="btnBuy">
                              <input class="BuyButton" type="button" value="Buy" onclick="Buy">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
        `
    })
    console.log(CardsNFT)
}