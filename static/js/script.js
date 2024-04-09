"use strict";


// === CONSTANTS ===
const NOUN = "noun";
const VERB = "verb";
const ING = "ing";

const SECOND = 1000;

const MIN = 4;
const MAX = 8;

const SFX_DELAY = 200;

const TRASH_COUNT = 5;
const TRASH_DELAY = 1.35 * SECOND;
const TOP_DELAY = 0.33 * SECOND;

const ZOOM = "zoom";  // used on Itch...
const SHRINK = "shrink";
const HIDDEN = "hidden";

const INVALID = "invalid";
const EMOJI_LIST = ["¤", "¥", "¿", "<", ">", ";"];

const STYLE_1 = "<span style='font-family: DrawIcons'>";
const STYLE_2 = "</span>"

const HINT_CHANCE = 0.4;
const HINT_DEFAULT_HEADER = "Errors!!!";
const HINT_DEFAULT_MESSAGE = "none rn =)";
const HINT_SPECIAL_MESSAGE_0 = "Dr Lingo will never laugh!<br>BADLIBS is a red herring!";
const HINT_SPECIAL_MESSAGE_1 = `the trash can (${STYLE_1}p${STYLE_2}) is the key to victory!`
const HINT_SPECIAL_MESSAGE_2 = `(${STYLE_1}<${STYLE_2} × ${STYLE_1}¥${STYLE_2})
- (${STYLE_1}¿${STYLE_2} × ${STYLE_1}¤${STYLE_2})<br>presses on ${STYLE_1}p${STYLE_2}`;
const HINT_SPECIAL_MESSAGE_3 = `${STYLE_1}¥${STYLE_2} = 2 and ${STYLE_1}¿${STYLE_2} = 3`;
const HINT_SPECIAL_MESSAGES = [HINT_SPECIAL_MESSAGE_1, HINT_SPECIAL_MESSAGE_2, HINT_SPECIAL_MESSAGE_3];


// === ANIMATIONS ===
const ANIM_TALK = "anim-talk";
const ANIM_HAND_1 = "anim-hand-1";
const ANIM_HAND_2 = "anim-hand-2";

const ANIM_ENTER = "anim-enter";  // user enters field
const ANIM_PRESS = "anim-press";  // user presses submit

const ANIM_RATTLE = "anim-rattle";  // badlibs & notes rattle

const ANIM_LID = "anim-lid";  // trash lid rattles
const ANIM_DIP = "anim-dip";  // trash can dips down

const ANIM_SPECIAL_LID = "anim-special-lid";  // trash lid flips open
const ANIM_SPECIAL_TRASH = "anim-special-trash";  // trash can scales
const ANIM_SPECIAL_SHRINK = "anim-special-shrink";  // badlibs shrinks

const ANIM_FADE = "anim-fade";  // fade out...
const ANIM_FADE_IN = "anim-fade-in";

const ANIM_ANGRY = "anim-angry"  // Lingo gets angry and calls out protag.
const ANIM_CENTER = "anim-center";  // Lingo center-screen
const ANIM_JUMP = "anim-jump";  // Lingo jumps up from the velocity of his shit
const ANIM_LOOK = "anim-look";  // Lingo looks at protag.

const ANIM_DIE = "anim-die";


// === SFX ===
const SFX_LINGO_1 = "sfx_lingo_1";
const SFX_LINGO_2 = "sfx_lingo_2";
const SFX_LINGO_3 = "sfx_lingo_3";
const SFX_LINGO_4 = "sfx_lingo_4";
const SFX_LINGO_RAND = [SFX_LINGO_2, SFX_LINGO_3, SFX_LINGO_4];
const SFX_LINGO_5 = "sfx_lingo_5";

const SFX_ENTER_VALID = "sfx_enter_valid";
const SFX_ENTER_INVALID = "sfx_enter_invalid";

const SFX_SUBMIT_VALID = "sfx_submit_valid";
const SFX_SUBMIT_INVALID = "sfx_submit_invalid";
const SFX_SUBMIT_VALID_LONG = "sfx_submit_valid_long";

const SFX_SUPER_ZUCC = "sfx_super_zucc";
const SFX_RATTLE = "sfx_rattle";

const SFX_SCRAPE = "sfx_scrape";
const SFX_FLUSH = "sfx_flush";

const SFX_PUNCH = "sfx_punch";

const SFX_CREEPY = "sfx_creepy";
const SFX_ELEVATOR = "sfx_elevator";  // song #1
const SFX_PLUSH = "sfx_plush";

const SFX_TABLE = {
  [ SFX_ENTER_VALID ]: {
    vol: 0.4
  },
  [ SFX_ENTER_INVALID ]: {
    vol: 0.4
  },
  [ SFX_SUBMIT_VALID ]: {
    vol: 0.4
  },
  [ SFX_SUBMIT_INVALID ]: {
    vol: 0.35
  },
  [ SFX_SUBMIT_VALID_LONG ]: {
    vol: 0.4
  },
  [ SFX_RATTLE ]: {
    vol: 0.6
  },
  [ SFX_SCRAPE ]: {
    vol: 0.5
  },
  [ SFX_SUPER_ZUCC ]: {
    vol: 0.3
  },
  [ SFX_FLUSH ]: {
    vol: 0.7
  },
  [ SFX_PUNCH ]: {  // & scream!
    vol: 0.75
  },
  [ SFX_CREEPY ]: {
    vol: 0.3
  },
  [ SFX_ELEVATOR ]: {
    vol: 0.2,
    loop: true
  },
  [ SFX_PLUSH ]: {
    vol: 0.9
  },
  // LINGO TALKING ABOUT SHIT
  [ SFX_LINGO_1 ]: {
    vol: 0.75
  }
}


// === HTML ===
const PAGE_0 = document.getElementById("page-0");
const PLAY = document.getElementById("play-button");
const LOOP = document.getElementById("sfx_empty");

const PAGE_1 = document.getElementById("page-1");

const LINGO_SMILE_OUTER = document.getElementById("lingo-smile-outer");
const LINGO_SMILE = document.getElementById("lingo-smile");
const LINGO_HANDS = document.getElementById("lingo-hands");

const LINGO_HAND_1_OUTER = document.getElementById("lingo-hand-outer-1");
const LINGO_HAND_2_OUTER = document.getElementById("lingo-hand-outer-2");
const LINGO_INTRO = document.getElementById("lingo-intro");

const LINGO_HAND_1_OUTER_2 = document.getElementById("lingo-hand-outer-1-2");
const LINGO_HAND_2_OUTER_2 = document.getElementById("lingo-hand-outer-2-2");

const PAGE_2 = document.getElementById("page-2");

const TOP = document.getElementById("top");

const BOXES = document.getElementsByClassName("box");

const TRASH_LID_1 = document.getElementById("trash-lid-outer-1");
const TRASH_LID_2 = document.getElementById("trash-lid-outer-2");
const TRASH_OUTER = document.getElementById("trash-outer");

const SUBMIT_OUTER = document.getElementById("submit-outer");

const PAPER_OUTER = document.getElementById("paper-outer");

const NOTES_HEADER = document.getElementById("notes").getElementsByTagName("p")[0];
const NOTES_LIST = document.getElementById("notes").getElementsByTagName("ul")[0];
const NOTES_HIDER = document.getElementById("hider");
const NOTES_OUTER = document.getElementById("notes-outer");

const BUTTONS = document.getElementById("paper-buttons");

const BATHROOM_OUTER = document.getElementById("bathroom-outer");

const LINGO_ANGRY = document.getElementById("lingo-angry-outer");
const LINGO_FRAMES = document.getElementById("lingo-frames");
const LINGO_SITTING_1 = document.getElementById("lingo-sitting-1");
const LINGO_SITTING_2 = document.getElementById("lingo-sitting-2");
const LINGO_DEAD = document.getElementById("lingo-dead");  // dead
const LINGO_SITTING_3 = document.getElementById("lingo-sitting-3");  // dead
const LINGO_TRIGGER = document.getElementById("lingo-trigger");  // kill Lingo! Die, bitch!

const TOILET_OUTER = document.getElementById("toilet-outer");

const PAGE_3 = document.getElementById("page-3");
const CREDITS = document.getElementsByClassName("credit");


// === GLOBALS ===
let G_FIELDS = [];
let G_LAST_ERRORS = [];

let G_COLORS = ["red", "orange", "yellow", "green", "blue", "purple", "violet"];

let G_SFX_DICT = {};
let G_ANIM_DICT = {};

let G_TRASH_TIMES = [];

let G_LAST_RATTLE = null;  // last rattle, mute it on succ
let G_LAST_ELEVATOR = null;  // last loop iteration, mute it...
let G_LAST_SPECIAL = false;
let G_LAST_LINGO = null;

let G_LOCKED = false;
let G_KILLABLE = false;


// === UTILS ===
function arrays_equal(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}


function change_colors() {
  const letters = TOP.getElementsByTagName("span");

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    letter.style.color = G_COLORS[i];
  }

  const color = G_COLORS.pop();
  G_COLORS.unshift(color);

  setTimeout(change_colors, TOP_DELAY);
}


function number_to_ranking(num) {
  if (num == 1) {
    return "1st";
  } else if (num == 2) {
    return "2nd";
  } else if (num == 3) {
    return "3rd";
  }
  return `${num}th`;
}


function get_error_message(field_type, value, i) {
  let error_message = "";
  let possessive = false;

  if (!value) {
    error_message = `is empty`;
  } else if (value.includes(" ")) {
    error_message = `must be a single word`;
  } else if (value.length < MIN) {
    error_message = `length less than ${MIN}`;
    possessive = true;
  } else if (value.length > MAX) {
    error_message = `length greater than ${MAX}`;
    possessive = true;
  } else if (field_type === VERB && !value.endsWith(ING)) {
    error_message = `does not end in "${ING}"`;
  }

  if (!error_message) return "";

  const ranking = number_to_ranking(i + 1);
  const suffix = possessive ? "'s": "";
  let ret = `<li>the ${ranking} box${suffix} ${error_message}`;

  if (i < EMOJI_LIST.length) {
    ret += ` ${STYLE_1}${EMOJI_LIST[i]}${STYLE_2}`;
  }

  return ret;
}


function get_random(array) {
  const r_index = Math.floor(Math.random() * array.length);
  return array[r_index];
}


// === SFX ===
function play_sound(sfx) {
  // prevent SFX spamming; it sounds bad!
  if (sfx in G_SFX_DICT) {
    let last_play = G_SFX_DICT[sfx];
    if (Date.now() - last_play <= SFX_DELAY) return;
  }

  const player = document.getElementById(sfx);

  if (sfx in SFX_TABLE) {
    const blob = SFX_TABLE[sfx];
    player.volume = ("vol" in blob) ? blob.vol : 1.0;
    player.loop = ("loop" in blob) ? true : false;
  }

  if (!player.paused) {
    player.pause();
    player.currentTime = 0;
  }
  player.play();

  G_SFX_DICT[sfx] = Date.now();

  // bullshit...
  if (sfx == SFX_RATTLE) G_LAST_RATTLE = player;
  if (sfx == SFX_ELEVATOR) G_LAST_ELEVATOR = player;
  if (sfx == SFX_LINGO_5) G_LAST_LINGO = player;
}


// === ANIMATIONS ===
function remove_classes(element) {
  while (element.classList.length > 0) {
    element.classList.remove(element.classList.item(0));
  }
}


function animate_manager(element, animation, keep) {
  element.classList.add(animation);

  // prevent class removal in some cases...
  if (element.id in G_ANIM_DICT) {
    G_ANIM_DICT[element.id] += 1;
  } else {
    G_ANIM_DICT[element.id] = 1;
  }
  const call_num = G_ANIM_DICT[element.id];

  let style = window.getComputedStyle(element);
  let dur = style.animationDuration;
  if (dur.endsWith("s")) {
    dur = dur.slice(0, -1);
  }
  if (!dur) {
    dur = 1;
  }
  let seconds = Number(dur) + 0.01;

  setTimeout(function() {
    if (G_ANIM_DICT[element.id] !== call_num) return;
    if (!keep) remove_classes(element);
  }, seconds * SECOND);
}


function animate(element, animation, keep) {
  if (element.classList.contains(animation)) {
    if(!keep) remove_classes(element);
    setTimeout(function() {
      animate_manager(element, animation, keep)
    }, 1);
  } else {
    animate_manager(element, animation, keep);
  }
}


// === NOTES ===
function clear_notes(message) {
  while (NOTES_LIST.firstChild) {
    NOTES_LIST.removeChild(NOTES_LIST.firstChild);
  }

  animate(NOTES_OUTER, ANIM_RATTLE);
  NOTES_HIDER.style.display = "block";

  if (message) {  // innerHTML is bad but fuck it!
    NOTES_HEADER.innerHTML = "HINTS!";
    NOTES_HIDER.innerHTML = message;
  } else {
    NOTES_HEADER.innerHTML = HINT_DEFAULT_HEADER;
    NOTES_HIDER.innerHTML = HINT_DEFAULT_MESSAGE;
  }
}


function update_notes(error_messages, force_clear) {
  if (!force_clear && arrays_equal(G_LAST_ERRORS, error_messages)) return;
  G_LAST_ERRORS = error_messages;

  clear_notes();

  if (error_messages.length) {
    NOTES_HIDER.style.display = "none";

    NOTES_LIST.innerHTML = "";
    for (let i = 0; i < error_messages.length; i ++) {
      NOTES_LIST.innerHTML += error_messages[i];
    }
  }
}


// === BADLIBS ===
function add_invalids(elements) {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (!element.classList.contains(INVALID)) {
      element.classList.add(INVALID);
    }
  }
}


function clear_invalids(elements) {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.classList.remove(INVALID);
  }
}


function clear_boxes() {
  for (let i = 0; i < BOXES.length; i++) {
    const box = BOXES[i];
    const input = box.getElementsByTagName("input")[0];
    clear_invalids([box, input]);
    input.value = "";
  }
}


// === TRASH BUTTON ===
TRASH_OUTER.onclick = function() {
  if (G_LOCKED) return;  // lockout when trash does special animation

  G_FIELDS = [];
  G_LAST_ERRORS = [];

  // show a hint on-screen
  let hint_message = "";
  if (G_LAST_SPECIAL) {
    G_LAST_SPECIAL = false;
  } else {
    if (Math.random() < HINT_CHANCE) {
      hint_message = get_random(HINT_SPECIAL_MESSAGES);
      G_LAST_SPECIAL = true;  
    }
  }

  clear_notes(hint_message);

  // animate everything clearing
  animate(TRASH_LID_1, ANIM_LID);
  animate(TRASH_LID_2, ANIM_LID);
  animate(TRASH_OUTER, ANIM_DIP);
  animate(PAPER_OUTER, ANIM_RATTLE);

  // reveal the bathroom!
  const now = Date.now();
  const len = G_TRASH_TIMES.length;
  if (!len || now - G_TRASH_TIMES[len - 1] > TRASH_DELAY) {
    G_TRASH_TIMES = [];
  }
  G_TRASH_TIMES.push(now);
  if (G_TRASH_TIMES.length === TRASH_COUNT) {
    if (G_TRASH_TIMES[G_TRASH_TIMES.length - 1] - G_TRASH_TIMES[0] <= TRASH_DELAY) {
      G_LOCKED = true;
      play_sound(SFX_SUPER_ZUCC);
      G_LAST_RATTLE.pause();  // mute the rattle

      animate(PAPER_OUTER, ANIM_SPECIAL_SHRINK, true);
      animate(TRASH_LID_1, ANIM_SPECIAL_LID);
      animate(TRASH_LID_2, ANIM_SPECIAL_LID);
      animate(TRASH_OUTER, ANIM_SPECIAL_TRASH);
      setTimeout(function() {
        // terrible code & a hot fix; fuck it!
        PAPER_OUTER.style.visibility = HIDDEN;

        setTimeout(function() {
          animate(BUTTONS, ANIM_FADE, true);
          animate(NOTES_OUTER, ANIM_FADE, true);

          // Lingo appear
          setTimeout(function() {
            BUTTONS.style.visibility = HIDDEN;
            NOTES_OUTER.style.visibility = HIDDEN;

            // flush...
            setTimeout(function() {
              play_sound(SFX_FLUSH);
              setTimeout(function() {
                animate(LINGO_FRAMES, ANIM_JUMP);
              }, 1.75 * SECOND);
  
              // Lingo change frames
              setTimeout(function() {
                animate(LINGO_FRAMES, ANIM_LOOK);
                LINGO_SITTING_1.style.opacity = "0";
                LINGO_SITTING_2.style.opacity = "1";
  
                play_sound(SFX_LINGO_5);

                // Lingo becomes killable...
                setTimeout(function() {
                  G_KILLABLE = true;
                  LINGO_TRIGGER.style.cursor = "pointer";
                }, 2 * SECOND);
  
              }, 5 * SECOND);

            }, SECOND);

          }, SECOND)

          // Lingo centering
          setTimeout(function() {
            play_sound(SFX_SCRAPE);
            animate(BATHROOM_OUTER, ANIM_CENTER, true);
          }, SECOND);

        }, SECOND);

      }, SECOND);
      return;
    }
    G_TRASH_TIMES = [];
  }

  play_sound(SFX_RATTLE);

  clear_boxes();
};


// === SUBMIT BUTTONS ===
function click_off(ref_box) {
  if (G_LOCKED) return;  // lockout when trash does special animation

  G_FIELDS = [];

  let valid_entry = false;
  let error_messages = [];
  for (let i = 0; i < BOXES.length; i++) {
    const box = BOXES[i];
    const field_type = box.classList[1];
    const input = box.getElementsByTagName("input")[0];
    const value = input.value;

    G_FIELDS.push(value);

    const is_ref_box = box === ref_box;
    if (box.classList.contains(INVALID) || is_ref_box) {
      const error_message = get_error_message(field_type, value, i);
      if (!error_message) {
        if (is_ref_box) valid_entry = true;
        continue;
      }

      if (is_ref_box) add_invalids([box, input]);
      error_messages.push(error_message);
    }
  }

  if (valid_entry) {
    play_sound(SFX_ENTER_VALID);
    animate(PAPER_OUTER, ANIM_ENTER);
  } else {
    play_sound(SFX_ENTER_INVALID);
  }
  update_notes(error_messages)
}


SUBMIT_OUTER.onclick = function() {
  if (G_LOCKED) return;  // lockout when trash does special animation

  animate(SUBMIT_OUTER, ANIM_PRESS);

  let error_messages = [];
  for (let i = 0; i < BOXES.length; i++) {
    const box = BOXES[i];
    const field_type = box.classList[1];
    const input = box.getElementsByTagName("input")[0];

    const error_message = get_error_message(field_type, input.value, i);
    if (!error_message) continue;
    add_invalids([box, input]);
    error_messages.push(error_message);
  }

  if (error_messages.length) {
    play_sound(SFX_SUBMIT_INVALID);
    update_notes(error_messages, true);
  } else {
    // lingo angry!!! FUCK!
    G_LOCKED = true;

    play_sound(SFX_SUBMIT_VALID);
    animate(LINGO_ANGRY, ANIM_ANGRY);

    const r_sfx = get_random(SFX_LINGO_RAND);
    play_sound(r_sfx);

    setTimeout(function() {
      // JUMP
      setTimeout(function() {
        G_LOCKED = false;
      }, SECOND);
      play_sound(SFX_ENTER_INVALID);
      animate(PAPER_OUTER, ANIM_RATTLE);
      clear_notes(HINT_SPECIAL_MESSAGE_0);
      clear_boxes();
    }, 2 * SECOND);
  }
};


// === KILL LINGO ===
LINGO_TRIGGER.onclick = function() {
  if (!G_KILLABLE) return;

  G_KILLABLE = false;  // now dead!
  G_LAST_ELEVATOR.pause();
  G_LAST_LINGO.pause();

  LINGO_TRIGGER.style.visibility = HIDDEN;
  LINGO_SITTING_2.style.opacity = "0";
  LINGO_SITTING_3.style.opacity = "1";

  play_sound(SFX_PUNCH);
  animate(LINGO_DEAD, ANIM_DIE, true);
  animate(TOILET_OUTER, ANIM_DIP)

  setTimeout(function() {
    animate(TOILET_OUTER, ANIM_FADE, true);
    TOILET_OUTER.visibility = HIDDEN;

    // switch to page 3!
    setTimeout(function() {
      play_sound(SFX_PLUSH);

      PAGE_2.style.display = "none";
      PAGE_3.style.display = "block";
      animate(PAGE_3, ANIM_FADE_IN, true);

      // this code is getting worse and worse, holy shit...
      for (let i = 0; i < CREDITS.length; i++) {
        setTimeout(function() {
          animate(CREDITS[i], ANIM_FADE_IN, true);
        }, (i + 1) * SECOND);
      }
    }, 2 * SECOND);

  }, 3 * SECOND);
}


function page1() {
  // shit hot-fix! fixes next fade-out...
  PAGE_1.style.opacity = "1";
  PAGE_1.style.display = "flex";
  remove_classes(PAGE_1);
  
  play_sound(SFX_CREEPY);

  setTimeout(function() {
    play_sound(SFX_LINGO_1);
    animate(LINGO_SMILE, ANIM_FADE_IN, true);

    setTimeout(function() {
      animate(LINGO_HANDS, ANIM_FADE_IN, true);

      setTimeout(function() {
        animate(LINGO_HAND_1_OUTER, ANIM_HAND_1, true);
        animate(LINGO_HAND_2_OUTER, ANIM_HAND_2, true);

        setTimeout(function() {
          animate(LINGO_INTRO, ANIM_FADE_IN, true);
        }, 0.45 * SECOND);

        setTimeout(function() {
          animate(LINGO_HAND_1_OUTER_2, ANIM_TALK, true);
          animate(LINGO_HAND_2_OUTER_2, ANIM_TALK, true);

          setTimeout(function() {
            animate(PAGE_1, ANIM_FADE, true);
            // switch to page 2!
            setTimeout(function() {
              PAGE_1.style.display = "none";
              PAGE_2.style.display = "flex";
              G_LOCKED = false;
              animate(PAGE_2, ANIM_FADE_IN, true);

              play_sound(SFX_ELEVATOR);
            }, SECOND)

          }, 17 * SECOND);  // change this value for cutscene length

        }, 2 * SECOND);

      }, 0.5 * SECOND);

    }, 1.5 * SECOND);

  }, SECOND);
}


function page0() {
  setTimeout(function() {
    animate(PAGE_0, ANIM_FADE_IN, true);
  }, SECOND);
}


PLAY.onclick = function() {
  if (G_LOCKED) return;
  G_LOCKED = true;

  play_sound(SFX_SUBMIT_VALID_LONG);

  animate(PLAY, ANIM_PRESS);

  setTimeout(function() {
    animate(PLAY, ANIM_FADE);

    setTimeout(function() {
      PAGE_0.style.display = "none";
      PAGE_1.style.display = "flex";
      animate(PAGE_1, ANIM_FADE_IN);
      page1();
    }, SECOND);

  }, SECOND);
}


// Itch bullshit...
function itch_zoom_or_shrink() {
  const height = Number(window.innerHeight);

  if (height >= 1000 && height <= 1200) {
    PAGE_2.classList.add(ZOOM);
  } else {
    PAGE_2.classList.remove(ZOOM);
  }

  if (height <= 600) {
    PAGE_2.classList.add(SHRINK);
  } else {
    PAGE_2.classList.remove(SHRINK);
  }
}


window.onresize = function() {
  itch_zoom_or_shrink();
}


// === MAIN ===
function main() {
  itch_zoom_or_shrink()

  page0();

  change_colors();

  const inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const box = input.parentNode;

    input.onfocus = function() {
      clear_invalids([box, input]);
    }

    input.onblur = function() {
      click_off(box);
    }
  }
}


window.onload = main();
