# Delivery Rescue with Crash Bandicoot Theme

### YOUR MISSION
Royal Mail have lost all your Amazon deliveries again but this time Crash is on the scene.  You have to rescue as many crates as you can.

### How to play
Use the left/right cursor keys to position Crash under the crates.

### Features
It's really good fun.

### Epic Wins
**It's all about size and timing 😉**
#### Size
1. The scale between the background, the player token and the items is perfect.
2. The player can usually make it all the way from left to right.  The fact they can't always, makes the game challenging.
4. The relation between the item and player token size means that getting items is challenging but possible.  Partial collisions do not earn poitns.

#### Timing  
1. The animate drop speed is 3 seconds.  Slower would be boring.  Faster would be very difficult for the player.
2. The speed of the player token at 20 pixels per key press.

**This was all a fluke.**  My success with size and timing was all a bit of luck.
 
## How I did it

### Interesting Bits
#### Visuals:
1. Crash & crates: Gifs.
````
transform: scaleX(-1);  /*To flip Crash*/
````
2. Background: Stretched to 10000px and the animate method used:

~~~~
document.getElementById("background").animate([
   { transform: 'translate3D(0, 0, 0)' }, 
   { transform: 'translate3D(-3000px, 0, 0)' }
   ], {
     duration: 8000,
     iterations: Infinity
   })
~~~~

#### Collision detection:
1. The jQuery 'position' method was used.
2. This returns an object with top and left properties.
3. These are then passed through the below conditional statement. 
4. If the 'item' is intersecting the 'player token' a collision is registered.
5. Lines 3 and 4 ensure the item is completely within the players token on the X axis.
6. This is to avoid partial collisions being registered as a hit.

~~~~
if ((blockPosition.top - intersectPoint) >= 0 &&
   (blockPosition.top - intersectPoint) < intersectMargin &&
   ((truckPosition.left < blockPosition.left) && 
   (truckPosition.left + 100) > (blockPosition.left + 50))){ 
~~~~      

## Bugs to work on
1. When player wins / looses the game doesn't end.  Keep the fun rolling on 🤘
2. When items are missed health decrements by a value created than 1.  First is 8, then a value in the 40's.  Hence health starts at 250. 
3. Visuals could do with some tidying up.  Nothing major.  Just a polish.  Colours, fonts, etc.  

## Features to add
1. Make site responsive and successfully resizable.
2. Make it playable on a mobile.  Register clicks on left/right of display.
2. Add pause functionality.
3. Recore scores with player name and have a score leaderboard.
4. Vary item drop speed.
5. Vary dropped item.
6. Vary score for different dropped items.
7. Explode missed items.
8. Rotate dropped items.  Looks like sailing through the air.
9. Add jump functionality.
10. Add obstacles that move in from the right of the screen.  If collision detected.  A life is lost.
11. Add power ups.
12. Turn into a 'progressive web app'.
13. Add additional level themes.  Basically change background, items graphics.

## Superman Pants Epic Win
1. This has been an amasing growth experience for me.
2. I have learned a lot about myself in the past two weeks.  Which has culminated in this project.
3. Carol Dweck's research on Fixed & Growth Mindsets has been invaluable to my growth journey.  I recommend this 10 minute animated video.  Even if you don't have this as a problem.  It is useful to know about.

Google Dork: ````mindset fixed growth```` ``` https://www.youtube.com/watch?v=Yl9TVbAal5s```

## Shout outs
Special thanks go out to Alex Chin and Rane Gowan.  I couldn't have done it without the two of you.  On Friday night I am buying you both a drink.