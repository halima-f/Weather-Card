
// document.write("<h1> WETHER CARD <h1/>")


var weathers = prompt(`Select WEATHER: 
    Sunny, 
    Rainy, 
    Windy, 
    Stormy, 
    Cloudy`)


var weather = ["Sunny" ,"Rainy" ,"Windy" , "Stormy", "Cloudy"]


if( weathers === weather[0]){
    document.write(`
      
        <div class="card" style="width: 18rem;">
  <img src="./assets/images/sunny.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 >SUNNY WEATHER</h3>
    <p >"Sunny weather days are days when there are very little or no clouds in the sky. We usually experience more sunny days in the summer when the days are warmer. This is the reason we enjoy spending more time outside in the summer."</p>
    
  </div>
</div> `
    )

}
else if( weathers === weather[1]) {
  document.write (`

      <div class="card" style="width: 18rem;">
<img class="image" src="./assets/images/rainy.jpg" alt="">
<div class="card-body">
  <h3 >RAINY WEATHER</h3>
  <p >"A rainy day is a day when the sky is covered with dark clouds, and raindrops fall from the clouds. It is a day filled with the sound of rain pitter-pattering on rooftops and leaves. On a rainy day, the air feels fresh, and there is a cool breeze that makes everything seem calm and cosy.".</p>
</div>
</div> `
  )

}
else if( weathers === weather[2]) {
  document.write(`

      <div class="card" style="width: 18rem;">
<img class="image" src="./assets/images/windy.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h3 >WINDY WEATHER</h3>
  <p >"Windy weather is characterized by strong winds or more wind than usual. The National Weather Service defines windy conditions as sustained wind speeds of 21 to 25 mph, or frequent wind gusts of 30 to 35 mph."</p>  
</div>
</div> `
  )

}
else if( weathers === weather[3]) {
  document.write(`

      <div class="card" style="width: 18rem;">
<img class="image" src="./assets/images/stormy.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h3 >STORMY WEATHER</h3>
  <p >"The word stormy describes weather conditions like thunder, lightning, dark clouds, wind, and pelting rain. It may be marked by significant disruptions to normal conditions such as strong wind, tornadoes, hail, thunder and lightning (a thunderstorm), heavy precipitation (snowstorm, rainstorm), heavy freezing rain (ice storm), strong winds (tropical cyclone, windstorm), wind transporting some substance through the atmosphere"</p>
</div>
</div> `
  )

}
else if( weathers === weather[4]) {
  document.write(`

      <div class="card" style="width: 18rem;">
<img class="image" src="./assets/images/cloudy.avif" class="card-img-top" alt="...">
<div class="card-body">
  <h3 >CLOUDY WEATHER</h3>
  <p >"When the sky is cloudy, it's so full of clouds that you can't see the sun. A cloudy day isn't ideal for a trip to the beach, and a cloudy night isn't great for star gazing. A cloudy sky tells you that rain's on the way, while a cloudy pond or a cloudy glass of water isn't translucent — you can't see through it."</p>
</div>
</div> `
  )

} else {
  document.write(`

    <div class="card" style="width: 18rem;">
<img class="error" class="image" src="https://thumbs.dreamstime.com/b/eror-sad-man-holding-broken-wire-having-trouble-accessing-internet-site-eror-sad-man-holding-broken-wire-hands-270054571.jpg" alt="...">`
  )
}
