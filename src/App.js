import React, { useState } from "react";
import "./styles.css";

//object to put all emoji data at one place
var emojiDictionary = {
  "😀": "Grinning face",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "😝": "Squinting Face with Tongue",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😇": "Smiling Face with Halo",
  "😋": "Face savouring food",
  "😅": "Smiling face with sweat",
  "😉": "Winking face",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "😌": "Relieved Face",
  "🥺": "Pleading Face",
  "🤥": "Lying Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😬": "Grimacing Face",
  "🤢": "Nauseated Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "😯": "Hushed Face"
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
