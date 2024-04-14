let AVERYCOUNT=1;
function averyCardAutoLoad(){
    if (AVERYCOUNT>1){downloadCard();}
    let cardlistAvery=document.querySelector("#cardlistAVERY").value;
    let cardsAvery=cardlistAvery.split("1 ");
    let event = new Event('change');
    let inputField =document.querySelector("#import-name")
    let cardAvery=cardsAvery[AVERYCOUNT].substr(2);
    inputField.value=String(cardAvery);
    inputField.dispatchEvent(event);
    if (AVERYCOUNT==1){
        setTimeout(() => {
            avery8thBorder();
            },"1000"
        );
    }
    
    AVERYCOUNT++;
}
function avery8thBorder(){
    let averyFrameSelector =document.querySelector("#selectFrameGroup");
    averyFrameSelector.value="Margin";
    let event = new Event('change');
    averyFrameSelector.dispatchEvent(event);
    setTimeout(() => {
            addFrame();
        },"1000"
    );
}
function averyChangeArt(){
    let averyArtIndex= document.querySelector("#art-index");
    if(averyArtIndex.value==averyArtIndex.length-1){
        averyArtIndex.value=0;
    }
    else{averyArtIndex.value++}
    let event = new Event('change');
    averyArtIndex.dispatchEvent(event);

}