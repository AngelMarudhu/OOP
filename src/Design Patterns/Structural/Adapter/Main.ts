////// REMEMBER THESE THING BEFORE JUMP INTO ADAPTER
//// POLYMORPHISM AND OVERRIDDEN, RUNTIME DECISION, SIMPLIFIED INTEGRATION,
// Allows objects of different classes treated as objects of a common superclass In this case Sounds (CLASS) can be treated as a MediaPlayerOld(INTERFACE)
// Sounds overrides the playMusic method to add new behavior integrating the CurrentPlayer functionality with the old interface
// MIXED ANSWER:  The Adapter Pattern dynamically decides which method to call based on the type of the object and the method invoked providing flexibility to integrate new features seamlessly

////////////////////////// DONE DONE DONE DONE DONE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

interface OldOne {
  request(): void;
}

class oldUsage implements OldOne {
  request(): void {
    console.log("this is the old client target");
  }
}

class NewAddedUsage {
  public newOne(): string {
    return "this is new one like adoptee";
  }
}

/// real adapter newone going to merge with old one helps adapter class

class RealAdapter implements OldOne {
  private newAdoptee: NewAddedUsage;

  constructor(adop: NewAddedUsage) {
    this.newAdoptee = adop;
  }

  request(): string {
    return `${this.newAdoptee.newOne()} used new adoptee`;
  }
}

//// old implementation the client relies on this old but we are going to add new one without change existing client interface which means oldOne interface you may seen this in somewhere in polymorphism overridden run time decision yes your read me right hahaha
// let dones = new oldUsage();
// dones.request();

// let adops = new NewAddedUsage();

// let checkss = new RealAdapter(adops);
// console.log(checkss.request());

////////////////////////// SOME REAL WORLD EXAMPLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Adapter: The class that acts as a bridge between the incompatible interfaces
// Target Interface(old one): The interface that clients use
// (Adaptee): The existing interface that needs adapting

//// THIS IS USED FOR 1998

interface MediaPlayerOld {
  playMusic(type: string, fileName: string): void;
}

///// Note: This class is no longer necessary if you're only focusing on the new functionality
class OldMediaPlayer implements MediaPlayerOld {
  playMusic(type: string, fileName: string): void {
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
  playAudio(fileName: string): void {
    console.log(`playing audio ${fileName}`);
  }

  playVideo(fileName: string): void {
    console.log(`playing video ${fileName}`);
  }
}

//// sounds class uses mediaplayerold interface and ADOPTS current player (advanced 2024) features in existing interface
//// currentplayer (advanced player) can play both audio and video

//// real adapter (Media adapter)

// Single Responsibility Principle: Each class has a single responsibility. CurrentPlayer handles the actual playing of media, Sounds adapts this functionality to the MediaPlayerOld interface, and AdapterAudio provides a simplified interface to the client

class Sounds implements MediaPlayerOld {
  private advanced: CurrentPlayer;

  constructor() {
    this.advanced = new CurrentPlayer();
  }

  playMusic(type: string, fileName: string): void {
    if (type === "audio") {
      this.advanced.playAudio(fileName);
    } else if (type === "video") {
      this.advanced.playVideo(fileName);
    } else {
      console.log(`please check you file format`);
    }
  }
}

///// this one client code + adapter you can call client classes
//// without this class you can directly instantiate the sounds class that's also okay but this way is more flexible and easy to find bugs and you can add another adapter as well just minimal change only needed
///// through the audioplayer we can access sounds and above all the interfaces because we've already implemented all functionality in the sounds class this helps us to us call the methods sounds class
//// Extensibility: Easily add new features with minimal changes to existing code
class AdapterAudio implements MediaPlayerOld {
  private sound: Sounds;

  constructor() {
    this.sound = new Sounds();
  }

  playMusic(type: string, fileName: string): void {
    this.sound.playMusic(type, fileName);
  }
}

let audio = new AdapterAudio();
audio.playMusic("audio", "marudhu.mp3");
audio.playMusic("video", "marudhu.mp4");
audio.playMusic("jpg", "marudhu.jpg");
