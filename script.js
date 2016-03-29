
var imgS = 'images/';
var imgE = '';

var quotes = [
  "Sorry mom, the mob has spoken.",
  "So I said to myself: what would God do in this situation?",
  "The goggles, they do nothing!",
  "And I'm not easily impressed — WOW, A BLUE CAR!",
  "Since the beginning of time, man has yearned to destroy the sun.",
  "Lisa, I'd like to buy your rock.",
  "My son's name is also Bort.",
  "We're here! We're queer! We don't want any more bears!",
  "There's an angry mob here to see you, sir.",
  "It's just like I've always said: Democracy doesn't work.",
  "Freedom! Horrible, horrible freedom!",
  "You'll pick many a bean.",
  "Woozle wazzle",
  "Stupid like a fox!",
  "Maybe there is no moral. Maybe it's just a bunch of stuff that happened.",
  "I'm about to convene another meeting... in bed.",
  "Learned, son. The word is learned.",
  "I see you've played knifey spooney before.",
  "D'oh! A deer! A female deer.",
  "...Again? This stupid country.",
  "In America, first you get the sugar, then you get the women, then you get the money.",
  "Tramamampoline!",
  "It was a pornography store. I was buying pornography.",
  "There's bound to be a little splash-back.",
  "Three simple words: I am gay.",
  "Are these idiots getting louder or dumber?",
  "I really like the vest.",
  "Well, we hit a slight snag when the universe collapsed in on itself.",
  "Abortions for some, miniature American flags for others!",
  "My god! It's like a party in my mouth and everyone's invited.",
  "I'm fired, aren't I?",
  "Don't criticize the boat!",
  "Yes! In your face, space coyote!",
  "Worst... episode... ever.",
  "Up and at them!",
  "Aw! Look at that little baby axe!",
  "Now, if every other gay person could save your life, we'd be set.",
  "Now they'll never save your brain, Hitler!",
  "How ironic.",
  "We need a name that's witty at first, but that gets less funny each time you hear it.",
  "In case you didn't real-ize, I was being sarcastic.",
  "Nothing's going to stop me in the middle of this sente - LEMON TREE?!",
  "Sure, the Germans have made a few mistakes, but that's why pencils have erasers!",
  "Dig up, stupid!",
  "FOX turned into a hardcore sex channel so gradually, I didn't even notice.",
  "Stop, stop! He's already dead.",
  "Truly, yours is a butt that will not quit.",
  "Come, family. Let us all bathe in TV's warm glowing glowy glow.",
  "My boy is a box! Damn you! He's a box!",
  "I'm sorry. I shouldn't have stopped to get that haircut.",
  "I felt such a feeling of power, like God must feel when he's holding a gun.",
  "So one of those Egg Council creeps got to you too, huh?",
  "Good thing I drink plenty of... malk?",
  "I call the big one Bitey.",
  "I noticed that he was wearing sneakers. For... sneaking.",
  "I'd rather let a thousand guilty men go free than chase after them.",
  "Go out on a Tuesday? Who am I, Charlie Sheen?",
  "Ahh, the waiting game sucks. Let's play Hungry Hungry Hippos!",
  "It's better to walk in on both your parents than on just one of them.",
  "It tastes like...burning.",
  "But look! I got some cool pogs: Alf pogs! Remember Alf? He's back...in pog form!",
  "Ow, my eye! I'm not supposed to get pudding in it.",
  "Save me, Jebus!",
  "Inflammable means flammable? What a country.",
  "My eyes! The goggles do nothing!",
  "Shoplifting is a victimless crime. Like punching someone in the dark.",
  "Stupid sexy Flanders!",
  "Just because I don't care doesn't mean that I don't understand.",
  "Me fail English? That's unpossible.",
  "Now make like my pants, and split.",
  "You don't win friends with salad.",
  "Shut up, brain, or I'll stab you with a Q-tip!",
  "I can't promise I'll try, but I'll try to try.",
  "I was saying 'Boo-urns.'",
  "Doh!",
  "I like my beer cold, my TV loud and my homosexuals flaming.",
  "Me fail English? That's unpossible!",
  "They call them fingers but I've never seen them fing...",
  "Bonjour, you cheese-eating surrender-monkeys!",
  "You'll have to speak up, I'm wearing a towel.",
  "This is my sandbox, I'm not allowed to go in the deep end.",
  "That's where I saw the leprechaun... He told me to burn things.",
  "Hi, Super Nintendo Chalmers!",
  "English, who needs that? I'm never going to England.",
  "How come things that happen to stupid people keep happening to me?",
  "Ha - ha!",
  "I choo choo choose you.",
  "I'm normally not a praying man, but if you're up there, please save me Superman.",
  "I am so smart, S-M-R-T! I mean S-M-A-R-T!",
  "My nose makes its own bubblegum",
  "Taxes? I thought this was the line for Metallica.",
  "Thank you. Come again.",
  "Oh, so they have Internet on computers now!",
  "She knew my one weakness, that I'm weak!",
  "Just because I don't care doesn't mean I don't understand.",
  "Oh, everything looks bad if you remember it.",
  "I hope I didn’t brain my damage."
];

var images = [
  {picture: imgS + "Abraham_Lincoln.jpg" + imgE, name: "Abraham Lincoln"},
  {picture: imgS + "Andrew_Jackson.jpg" + imgE, name: "Andrew Jackson"},
  {picture: imgS + "Ben_Franklin.jpg" + imgE, name: "Ben Franklin"},
  {picture: imgS + "Bruce_Willis.jpg" + imgE, name: "Bruce Willis"},
  {picture: imgS + "Che_Guevara.jpg" + imgE, name: "Che Guevara"},
  {picture: imgS + "Dalai_Lama.jpg" + imgE, name: "Dalai Lama"},
  {picture: imgS + "Darth_Vader.jpg" + imgE, name: "Darth Vader"},
  {picture: imgS + "Donal_Trump.jpg" + imgE, name: "Donal Trump"},
  {picture: imgS + "Edgar_Allan_Poe.jpg" + imgE, name: "Edgar Allan Poe"},
  {picture: imgS + "Fidel_Castro.jpg" + imgE, name: "Fidel Castro"},
  {picture: imgS + "Gandalf.jpg" + imgE, name: "Gandalf"},
  {picture: imgS + "Gandhi.jpg" + imgE, name: "Gandhi"},
  {picture: imgS + "Hillary_Clinton.jpg" + imgE, name: "Hillary Clinton"},
  {picture: imgS + "jfk.jpg" + imgE, name: "JFK"},
  {picture: imgS + "Joseph_Stalin.jpg" + imgE, name: "Joseph Stalin"},
  {picture: imgS + "King_Henry_VIII.jpg" + imgE, name: "King Henry VIII"},
  {picture: imgS + "Kylo_Ren.jpg" + imgE, name: "Kylo Ren"},
  {picture: imgS + "Oprah_Winfrey.jpg" + imgE, name: "Oprah Winfrey"},
  {picture: imgS + "Rasputin.jpg" + imgE, name: "Rasputin"},
  {picture: imgS + "Salvador_Dali.jpg" + imgE, name: "Salvador Dali"},
  {picture: imgS + "Thomas_Edison.jpg" + imgE, name: "Thomas Edison"},
  {picture: imgS + "Vincent_Van_Gogh.jpg" + imgE, name: "Vincent Van Gogh"},
  {picture: imgS + "Winston_Churchill.jpg" + imgE, name: "Winston Churchill"},
  {picture: imgS + "Albert_Einstein.jpg" + imgE, name: "Albert Einstein"},
  {picture: imgS + "Emily_Dickinson.jpg" + imgE, name: "Emily Dickinson"},
  {picture: imgS + "Marilyn_Monroe.jpg" + imgE, name: "Marilyn Monroe"},
  {picture: imgS + "Martha_Stewart.jpeg" + imgE, name: "Martha Stewart"},
  {picture: imgS + "Martin_Luther_King_Jr.png" + imgE, name: "Martin Luther King Jr"},
  {picture: imgS + "Queen_Elizabeth.jpg" + imgE, name: "Queen Elizabeth"},
  {picture: imgS + "Spock.jpg" + imgE, name: "Spock"},
  {picture: imgS + "steve_jobs.jpg" + imgE, name: "Steve Jobs"}
];

$("#quoteButton").on("click", function(e){
  //Grabs a random number between 1 - 100//
  var indexNum = Math.floor((Math.random()) * 100);

  //Gets the amount of array items//
  var quoteLen = quotes.length;

  //Picks a random index in the array//
  var quoteIndex = Math.floor((quoteLen / 100) * indexNum);

  //Gets the length of the images array//
  var imgLen = images.length;

  //Grabs a random number between 1 - 100, You don't want to use the same number as the quotes, so //
  var imgIndexNum = Math.floor((Math.random()) * 100);

  //Picks a random picture in the array//
  var imgIndex = Math.floor((imgLen / 100) * imgIndexNum);

  //Puts a random quote into the div with the id of quotes//
  $("#quotes").html(quotes[quoteIndex]);
  $("#quotes").append("<br />" + "<span>-" + images[imgIndex].name + "</span>")

  $('#quotes').css({
    "font-family" : "Impact",
    "font-size" : "30px",
    "color" : "white",
    "text-shadow" : "2px 0 2px #000",
    "margin-top" : "350px"
  });

  //Places a random picture into the div with the id picture//
  $("#picture").css({
    "background-image" : 'url(' + images[imgIndex].picture + ')',
    "height" : "500px",
    "width" : "500px",
    "padding" : "10px"
  });

  $("#picture span").css({
    "font-size" : "24px",
  });

  $('#pictureFrame').css({
    "display" : "-webkit-flex",
    "display" : "flex",
    "-webkit-justify-content" : "center",
    "justify-content" : "center"
  });

});
