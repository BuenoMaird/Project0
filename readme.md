
 ____ ____ ____ _________ ____ ____ ____ _________ ____ ____ ____ 
||T |||i |||c |||       |||T |||a |||c |||       |||T |||o |||e ||
||__|||__|||__|||_______|||__|||__|||__|||_______|||__|||__|||__||
|/__\|/__\|/__\|/_______\|/__\|/__\|/__\|/_______\|/__\|/__\|/__\|




Let us begin explaining... Strap yourself in, this is going to get invigorating...




 ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ 
||T |||e |||c |||h |||n |||o |||l |||o |||g |||i |||e |||s ||
||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__||
|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|
 ____ ____ ____ ____ 
||U |||s |||e |||d ||
||__|||__|||__|||__||
|/__\|/__\|/__\|/__\|



The site is built entirely around HTML CSS Javascript and Jquery (which I understand is also javascript but I used it a lot and it's awesome so it gets its own special mention, just for existing)


  _   _   _   _  
 / \ / \ / \ / \ 
( H | T | M | L )
 \_/ \_/ \_/ \_/ 

The HTML contains the basic markup while also containing a couple of divs that are hidden originally. These are the popups that appear at the end of a round, choosing a theme and the instructions page. I will discuss the process of them more when I talk about the Jquery.

The HTML mainsite markup was fairly standard. Just a couple of divs within divs to seperate the board and the instructions. It was all contained with a container div with a width of 960px to house everything in the middle of the page.



  _   _   _  
 / \ / \ / \ 
( C | S | S )
 \_/ \_/ \_/ 

The css used was interesting and I ended up having a lot of fun playing with it. Mainly when I got to the idea of having different themes. At the moment I have 3 seperate style sheets setup which are brought in when a click event on any of the theme  tag is clicked.

I originally planned on using css to do a lot of the animations in the project but then I was introdcued to jquery and event handlers and suddenly my options seemed a lot greater and css was left behind like the cheap little hussy it is (Not really though CSS I love you baby).

Overall CSS ended up just being used for the main styling of the site. I took big advantage of the RGBA to add opacity to the background colours of divs without affecting the text within them (something that stumped me early on in the project).

I think there is some css in there that isn't actually used. I may go back and clean this up one day or try and impliment it but only time will tell...



  _   _   _   _   _   _   _   _   _   _  
 / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ 
( J | a | v | a | s | c | r | i | p | t )
 \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ 

 I think out of everything we have learned so far javascript is the one I am having trouble with most. I think this shows perfectly in my evaluateWinner function which is one massive if statement. I still plan on going back and fixing this up but enough about that. 
 I attempted to keep the functions to as fewer lines as possible, this mentatlity sort of get left behind towards the end of the project as I started focusing more on bug fixes. I would like to go back and rework the "playAgain" click event as it got added to as a quick way to get the counters working. I think I could probably throw all that into a function and then just call that in the click event. That actually makes a lot of sense. I will do that.

 I think I have my head around functions and if statements but so much to learn about arrays and objects. 



  _   _   _   _   _   _  
 / \ / \ / \ / \ / \ / \ 
( j | Q | u | e | r | y )
 \_/ \_/ \_/ \_/ \_/ \_/ 


Ah my new love. I got a little carried away with click events but they're so tasty. So much interaction! I love it! jQuery became a massive part of my project. I think the thing I had the most fun with was sorting out the theme change buttons. A simple thing to impliment but adds a lot of interaction to the player. I have a lot to learn about traversing the DOM with this. The close buttons threw me a little bit but I had a lot of fun playing with it. 

I wish I had more time to impliment more animations using tweenMax but there is always more projects and I have so many ideas that I just can't wait..

Now I said I'd talk more about the pop up events in here so I guess I should honour that agreement. 
The pop up events were a heap of fun to work with and I will definitely be using them more often. I had a lot of help with the jQueryUI library which added some extra fun animations to make what was already a party, a full blown rave of animationey goodness.




 ____ ____ ____ ____ ____ ____ ____ ____ _________ ____ ____ ____ ____ ____ 
||A |||p |||p |||r |||o |||a |||c |||h |||       |||T |||a |||k |||e |||n ||
||__|||__|||__|||__|||__|||__|||__|||__|||_______|||__|||__|||__|||__|||__||
|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/_______\|/__\|/__\|/__\|/__\|/__\|



I am not entirely sure what this means. But I think I definitely took a design approach to the entire project. I enjoy the front end, mainly styling and interactivity so I spent my time doing what I love and trying to make this site look and run as smoothly as possible and I think achieved that. Ok some of the animations can be a little jerky and the background images don't load quickly but these are just lessons to learn. 

As far as workflow. I set myself goals for the day and did my best to achieve those goals (mainly so I could sleep night).

First day: Logic - The plan was to atleast get a game playing by the end of the first day which was achieved earlier then expected with some help from some top people.

Second day: Styling/Functionality - Spent the second day messing around with styling in CSS and having a play with the jQueryUI library. The goal for this day was getting the basic buttons and animations working which wasn't completely achieved but enough that I managed to sleep for most of the night.

Third day: Drying up/Extra features - The third day was about getting the extra features working such as the counters. I had planned to get the local storage working but unfortunately I will have to add that later on. I was so excited...The drying up took a long time, I really need to work on my logic when building with code. I struggled to find how I could shrink my massive win statement fortunately some legend pointed me in the right direction (read: gave me a function to use) and I managed to shrink it down somewhat.



 ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ 
||I |||n |||s |||t |||a |||l |||l |||a |||t |||i |||o |||n ||
||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__||
|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|
 ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ 
||I |||n |||s |||t |||r |||u |||c |||t |||i |||o |||n |||s ||
||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__|||__||
|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|

The only thing I installed was jQueryUI which was super simple.

- Basically download the package from http://jqueryui.com/.

- Unzip the folder

- Copy the files into your working directory

- Add a script tag (with the src to the ) in your HTML head before your original js (so it recognises what you're referencing.).



 ____ ____ ____ ____ ____ _________ ____ ____ ____ ____ 
||W |||h |||e |||r |||e |||       |||N |||e |||x |||t ||
||__|||__|||__|||__|||__|||_______|||__|||__|||__|||__||
|/__\|/__\|/__\|/__\|/__\|/_______\|/__\|/__\|/__\|/__\|

I had a lot of plans that didn't make it into the original build. The main is the fourth theme which I plan on using as a playground for tweenMax animations and a whole lot of other things such as sound. It will be a beautiful cluster fuck of No.

I would also like to get the local storage setup and working. I think that should only take me an hour or so, so I will play with that soon but unfortunately it just didn't make the cut when the drying up took so long. So yeah


Hope you enjoyed reading this.

Sweet...

Cya!












