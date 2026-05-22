// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const regex = /chatbot/i;
  const match = command.match(regex);
  return match.index === 0;
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  return message.replace(/emoji[0-9]*/ig, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const rgx = new RegExp(/\(\+[0-9]*\) [0-9]*-[0-9]*-[0-9]*/ig);
  const match = number.match(rgx);
  if(match && match.length > 0){
    return "Thanks! You can now download me to your phone.";
  } else {
    return `Oops, it seems like I can't reach out to ${number}`;
  }
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const rgx = new RegExp(/[a-zA-Z0-9]*\.[a-zA-Z0-9]*/ig);
  const match = userInput.match(rgx);
  if(!match) return null;
  const r = [];
  match.map(x => {
    r.push(x);
  });
  return r;
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const result = fullName.split(/[,\ ]/);
  return `Nice to meet you, ${result[2]} ${result[0]}`;
}
