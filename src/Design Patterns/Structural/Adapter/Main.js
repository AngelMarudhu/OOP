"use strict";
////// REMEMBER THESE THING BEFORE JUMP INTO ADAPTER
//// POLYMORPHISM AND OVERRIDDEN, RUNTIME DECISION, SIMPLIFIED INTEGRATION,
// Allows objects of different classes treated as objects of a common superclass In this case Sounds (CLASS) can be treated as a MediaPlayerOld(INTERFACE)
// Sounds overrides the playMusic method to add new behavior integrating the CurrentPlayer functionality with the old interface
// MIXED ANSWER:  The Adapter Pattern dynamically decides which method to call based on the type of the object and the method invoked providing flexibility to integrate new features seamlessly
class oldUsage {
    request() {
        console.log("this is the old client target");
    }
}
class NewAddedUsage {
    newOne() {
        return "this is new one like adoptee";
    }
}
/// real adapter newone going to merge with old one helps adapter class
class RealAdapter {
    newAdoptee;
    constructor(adop) {
        this.newAdoptee = adop;
    }
    request() {
        return `${this.newAdoptee.newOne()} used new adoptee`;
    }
}
///// Note: This class is no longer necessary if you're only focusing on the new functionality
class OldMediaPlayer {
    playMusic(type, fileName) {
        if (type === "audio") {
            console.log(`here is your audio ${fileName}`);
        }
        console.log(`this isn't proper audio format`);
    }
}
// let oldUsages = new OldMediaPlayer();
// oldUsages.playMusic("audio", "marudhu.mp3");
// oldUsages.playMusic("video", "marudhu.mp4");
///// NOW WE ARE 2024 ADDED NEW FEATURE WITH OLD EXISTING INTERFACE CODE
////// this one new adopteeee class new features
class CurrentPlayer {
    playAudio(fileName) {
        console.log(`playing audio ${fileName}`);
    }
    playVideo(fileName) {
        console.log(`playing video ${fileName}`);
    }
}
//// sounds class uses mediaplayerold interface and ADOPTS current player (advanced 2024) features in existing interface
//// currentplayer (advanced player) can play both audio and video
//// real adapter (Media adapter)
// Single Responsibility Principle: Each class has a single responsibility. CurrentPlayer handles the actual playing of media, Sounds adapts this functionality to the MediaPlayerOld interface, and AdapterAudio provides a simplified interface to the client
class Sounds {
    advanced;
    constructor() {
        this.advanced = new CurrentPlayer();
    }
    playMusic(type, fileName) {
        if (type === "audio") {
            this.advanced.playAudio(fileName);
        }
        else if (type === "video") {
            this.advanced.playVideo(fileName);
        }
        else {
            console.log(`please check you file format`);
        }
    }
}
///// this one client code + adapter you can call client classes
//// without this class you can directly instantiate the sounds class that's also okay but this way is more flexible and easy to find bugs and you can add another adapter as well just minimal change only needed
///// through the audioplayer we can access sounds and above all the interfaces because we've already implemented all functionality in the sounds class this helps us to us call the methods sounds class
//// Extensibility: Easily add new features with minimal changes to existing code
class AdapterAudio {
    sound;
    constructor() {
        this.sound = new Sounds();
    }
    playMusic(type, fileName) {
        this.sound.playMusic(type, fileName);
    }
}
let audio = new AdapterAudio();
audio.playMusic("audio", "marudhu.mp3");
audio.playMusic("video", "marudhu.mp4");
audio.playMusic("jpg", "marudhu.jpg");
