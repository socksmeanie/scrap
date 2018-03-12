/* eslint-disable no-use-before-define */
/* eslint-env jquery*/
// var clear =
var current_page = 0;

$( document ).ready( function(){
    load_page( 0 );
    $( "#selections" ).on( "click", ".choice", function(){
        var target = $( this ).data( "target" );

        load_page( target );
    } );
} );

function load_page( id ){
    // Fetch JSON for page data associated with given ID
    var page_data = Story[id];

    clear_page();
    set_page_text( page_data.text );
    if( page_data.type === "choice" ){
        for( var choice in page_data.choices ){
            var choice_data = page_data.choices[choice];

            add_choice( choice_data.text, choice_data.target );
        }
    }
}

function set_page_text( text ){
    $( "#output" ).append( "<p>" + text + "</p>" );
}

function add_choice( text, target ){
    $( "#selections" ).append( "<button class=choice data-target=" + target + ">" + text + "</button>" );
}

function clear_page(){
    $( "#output" ).empty();
    $( "#selections" ).empty();
}

// Page data
var Story = [ { // 0
    "text": "The year is 1973. You're a hard-boiled PI with a wise-cracking partner, Burt. One day, you remember you haven't had a client in days. Or, actually, ever. Maybe you could go out and look for trouble? Then again, maybe Burt's got something to say.",
    "type": "choice",
    "choices": [ {
        "text": "Go out",
        "target": 1
    }, {
        "text": "Speak to Burt",
        "target": 2
    }, {
        "text": "Give Up",
        "target": 6
    } ]
}, { // 1
    "text": "You try jiggling the handle, but can't seem to get out! Burt whines. You look around the room. There's a mop, and Burt. Hmm.",
    "type": "choice",
    "choices": [ {
        "text": "Use the Mop",
        "target": 4
    },
    {
        "text": "Use Burt",
        "target": 5
    },
    {
        "text": "Give Up",
        "target": 6
    } ]
}, { // 2
    "text": "You face your partner. 'Hey Burt, ol' buddy,' you say. 'We need customers.' Burt looks up at you with his basset hound eyes. 'Bow wow.' He states. You laugh at your partner's wit, then consider what to do.",
    "type": "choice",
    "choices": [ {
        "text": "Pet Burt",
        "target": 3
    },
    {
        "text": "Make a Phone Call",
        "target": 7
    },{
        "text": "Give Up",
        "target": 6
    } ]
}, { // 3
    "text": "You scratch him behind the ears. 'Woof.' Burt says, as he wags his tail. You chuckle. Is nothing sacred to your wiseacre partner? Oh! Also you die.<br />The End.",
    "type": "choice",
    "choices": [ {
        "text": "Back to the beginning!",
        "target": 0
    } ]
}, { // 4
    "text": "You bang on the door repeatedly. Eventually, you hear voices. Villains, perhaps? The door opens, and as you're blinded by light, you hear a voice. 'Woah, there's some person and a dog in the mop closet!' You are promptly kicked out of JC Penny.<br /> The End.",
    "type": "choice",
    "choices": [ {
        "text": "Take me back to the beginning!",
        "target": 0
    } ]
}, { // 5
    "text": "You pick up your partner and rub his dog face (nobody ever said Burt was a looker) on the door until it's opened. By some teenager. 'Mr. D'Marco?' She nervously stammers. 'Why is there a lunatic and a dog in the mop closet?' 'Say what?' You ask. Eventually you strike up a deal with the JC Penny: you're allowed to stay in the closet (the stench you left made it unusable, anyway), and in return, you prowl the store at night, to scare away intruders with your unsettling..ness. You agree, then promptly die of starvation because you haven't eaten for the entire time you've been in there. <br /> The End.",
    "type": "choice",
    "choices": [ {
        "text": "Take me back to the beginning!",
        "target": 0
    } ]
},
{ // 6
    "text": "You collapse into a heap.<br /> The End.",
    "type": "choice",
    "choices": [ {
        "text": "Take me back to the beginning!",
        "target": 0
    } ]
},
{ // 7
    "text": "You reach for your phone, but don't see anything. Hm. You study your surroundings more carefully. Hm. Looks like your office is a mop closet. Weird, 12 years on the job, and you never quite noticed you've been trapped in a room with no food. You die.<br /> The End.",
    "type": "choice",
    "choices": [ {
        "text": "Take me back to the beginning!",
        "target": 0
    } ]
} ];

/*
var story = {
    "Start": "It's the start of a fresh new day! The sun is shining. Would you like to [Go Out] or [Stay In]?",
    "Go Out": "You step outside your home and are immediately accosted by bears. They tackle you and steal your wallet.",
    "Stay In": "Might as well make the most of your day off! Would you like to [Take Nap] or [Read a Book]?",
    "Take Nap": "You lie down on your sofa and rest your eyes. You wake up a few hours later as a bear finishes devouring you.",
    "Read a Book": "You take a book off your shelf. Hm..there's only two left to read. [The Iliad] or [Deterring Bears]?",
    "The Iliad": "You enjoy reading Homer's classic tale of children being visited by a cat in a hat. You wind up so engrossed by it, that you don't notice the bears coming for you until it's too late.",
    "Deterring Bears": "How odd. You don't recall buying this. You take a look at the book jacket - looks like the author is a bear. Makes sense, you guess. Just then, you hear scuttling in your fireplace: bears! They're getting in the house, and they're ravenous! You take a look at the tips in the book. It suggests covering yourself in [Sauce], but your gut tells you to [Run]. What do you do?",
    "Sauce": "You taste wonderful to the bears. You may be dead, but at least you made them happy!",
    "Run": "Forget education! You trust your instincts! You swing open your front door and charge directly into the gaping maw of a bear. Oops."
};
//"Index": "Value"


var choice = prompt( story.Start );
var end = false;

while (end != true){
if( choice === "Go Out" || choice === "Take Nap" || choice === "The Iliad" || choice === "Sauce" || choice === "Run"){
    end = true;
    $("#output").text(story[choice]);
} else if( choice === "Stay In" || choice ===  "Read a Book" || choice ===  "Deterring Bears" ) {
    choice = prompt(story[choice]);
    $("#input").html('<input type="button" id="inputChoose" value="story.choice" onclick="choice = ">');
    $("#output").text(story[choice]);
  }
}

 */
