const music=new Audio('/Users/nischintshreshtanijaguna/Desktop/Project/music/4.mp3');
music.play();















let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',function(){
    pop_song.scrollLeft+=330;
})

pop_song_left.addEventListener('click',()=>
{
    pop_song.scrollLeft-=330;

})

let popular_artists_left=document.getElementById('pop_art_left');
let popular_artists_right=document.getElementById('pop_art_right');
let Artists_bx=document.getElementsByClassName('Artists_bx')[0];
popular_artists_right.addEventListener('click',function()
{
    Artists_bx.scrollLeft+=330;
})
popular_artists_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft-=330;

})