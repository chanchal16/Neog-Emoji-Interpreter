import React, { useState } from "react";
import "./styles.css";

//object to put all emoji data at one place
var emojiDictionary = {
  "ð": "Grinning face",
  "ð": "Grinning Face with Smiling Eyes",
  "ð": "Beaming Face with Smiling Eyes",
  "ðĪĢ": "Rolling on the Floor Laughing",
  "ð": "Face with Tears of Joy",
  "ð": "Squinting Face with Tongue",
  "ð": "Face with Tongue",
  "ð": "Winking Face with Tongue",
  "ðĪŠ": "Zany Face",
  "ð": "Smiling Face with Halo",
  "ð": "Face savouring food",
  "ð": "Smiling face with sweat",
  "ð": "Winking face",
  "ðĨ°": "Smiling Face with Hearts",
  "ð": "Smiling Face with Heart-Eyes",
  "ðĪĐ": "Star-Struck",
  "ð": "Face Blowing a Kiss",
  "ðĪ": "Hugging Face",
  "ðĪ­": "Face with Hand Over Mouth",
  "ð": "Smirking Face",
  "ð": "Unamused Face",
  "ð": "Relieved Face",
  "ðĨš": "Pleading Face",
  "ðĪĨ": "Lying Face",
  "ð": "Pensive Face",
  "ðŠ": "Sleepy Face",
  "ðĪĪ": "Drooling Face",
  "ðŽ": "Grimacing Face",
  "ðĪĒ": "Nauseated Face",
  "ðĨī": "Woozy Face",
  "ðĩ": "Dizzy Face",
  "ðŊ": "Hushed Face"
};

//convert obj to array to show in the view
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  // var [userInput, setUserInput] = useState("");
  var [meaning, setEmojiMeaning] = useState("");

  //when input is changed
  function changeEmojiHandler(event) {
    var meaning = emojiDictionary[event.target.value];
    console.log(event.target.value);
    // setUserInput(event.target.value);
    if (meaning === undefined) {
      meaning = "Not Available";
    }
    setEmojiMeaning(meaning);
  }

  //when emoji is clicked
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <div className="main-container">
        <h1>Emoji Interpreter</h1>
        <div className="container ">
          <input onChange={changeEmojiHandler} />
          <div className="meaning">{meaning}</div>

          <h3>List of Emojis</h3>

          {emojisWeKnow.map((emoji) => {
            return (
              <span
                onClick={() => emojiClickHandler(emoji)}
                key={emoji}
                className="emoji-list "
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
      <footer>
        <div className="footer-content center">
          <a
            href="https://chanchalrajput.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            @ Chanchal Rajput
          </a>
        </div>
      </footer>
    </div>
  );
}
