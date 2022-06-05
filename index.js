function shout(string) {
    // todo
    return string .toUpperCase();
  }
  "Hello!".toUpperCase(); // 'HELLO!'
  
  function whisper(string) {
    // todo
    return string .toLowerCase();
  }
  "Hello!".toUpperCase(); // 'hello!'


  function logShout(string) {
    console.log(string.toUpperCase());
  }
  "Hello!".toUpperCase(); // 'HELLO!'
 
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  "Hello!".toLowerCase(); // 'HELLO!'


  function sayHiToHeadphonedRoommate(string) {
    if (string ===string.toLowerCase()) {
      return "I can\'t hear you!";
    }
    else if(string ===string.toUpperCase()) {
      return "YES INDEED!";
  }
    else if(string ==="Let's have dinner together!") {
    return "I would love to!";
  }

};
