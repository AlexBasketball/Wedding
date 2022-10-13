document.addEventListener('DOMContentLoaded', function() {
    ymaps.ready(init);
    function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.93535, 37.334136],
        zoom: 15
    });
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", 
            coordinates: [55.93535, 37.334136]
        }
    });
    myMap.geoObjects.add(myGeoObject);
};

    let date = new Date('Jul 25 2022 15:00:00');

    function counts(){
        let now = new Date();
        gap = date - now;

        let days = Math.floor(gap / 1000 / 60 / 60 / 24);
        let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(gap / 1000 / 60) % 60;
        let seconds = Math.floor(gap / 1000) % 60;

        if (gap <= 0){
            document.getElementById('timer__groud').innerText = '00:00:00';
        }else{
            document.getElementById('d').innerText = days;
            document.getElementById('h').innerText = hours;
            document.getElementById('m').innerText = minutes;
            document.getElementById('s').innerText = seconds;
        }}; 
    counts();

    setInterval(counts, 1000);

    let answer = document.querySelector('.invite__top__button');
    let main = document.querySelector('.invite__top');
    let left = document.querySelector('.invite__bottom');
    
    answer.addEventListener('click',
    function(){
        main.classList.toggle('visible');
        
        left.classList.toggle('hide');
    })

   // $(".invite__top__button").on("click", function() {
       // $(".invite__bottom").toggleClass("visible");
     // });
    
  // $(".invite__top__button").on("click", function() {
  //      $(".invite__top").toggleClass("hide");
  //  });
    
   // $(".invite__bottom__close").on("click", function() {
   //     $(".invite__bottom").toggleClass("visible");
   // });

   // $(".invite__bottom__close").on("click", function() {
       // $(".invite__top").toggleClass("hide");
   // });

});
