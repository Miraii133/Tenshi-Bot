/* eslint-disable max-len */
const jlptTestInfo = {
  passScore: '20',
  minimumMistakes: '5',
  timeLimit: '30',
  delayNoAnswer: '0',
  delayRightAnswer: '0',
  otherPlayerWait: '0',
};

// Specific commands for the test, just change the variables
// above to change the settings of the JLPT quiz
const enumjlptCommand = {
  n5: `k!quiz gN5+N5 ${jlptTestInfo.passScore}\
 mmq=${jlptTestInfo.minimumMistakes} atl=${jlptTestInfo.timeLimit}\
 dauq=${jlptTestInfo.delayNoAnswer} daaq=${jlptTestInfo.delayRightAnswer}\
 aaww=${jlptTestInfo.otherPlayerWait}`,

  n4: `k!quiz gN4+N4 ${jlptTestInfo.passScore}\
 mmq=${jlptTestInfo.minimumMistakes} atl=${jlptTestInfo.timeLimit}\
 dauq=${jlptTestInfo.delayNoAnswer} daaq=${jlptTestInfo.delayRightAnswer}\
 aaww=${jlptTestInfo.otherPlayerWait}`,

  n3: `k!quiz gN3+N3 ${jlptTestInfo.passScore}\
 mmq=${jlptTestInfo.minimumMistakes} atl=${jlptTestInfo.timeLimit}\
 dauq=${jlptTestInfo.delayNoAnswer} daaq=${jlptTestInfo.delayRightAnswer}\
 aaww=${jlptTestInfo.otherPlayerWait}`,

  n2: `k!quiz gN2+N2 ${jlptTestInfo.passScore}\
 mmq=${jlptTestInfo.minimumMistakes} atl=${jlptTestInfo.timeLimit}\
 dauq=${jlptTestInfo.delayNoAnswer} daaq=${jlptTestInfo.delayRightAnswer}\
 aaww=${jlptTestInfo.otherPlayerWait}`,

  n1: `k!quiz gN1+N1 ${jlptTestInfo.passScore}\
 mmq=${jlptTestInfo.minimumMistakes} atl=${jlptTestInfo.timeLimit}\
 dauq=${jlptTestInfo.delayNoAnswer} daaq=${jlptTestInfo.delayRightAnswer}\
 aaww=${jlptTestInfo.otherPlayerWait}`,
};

// removes spaces so message.js condition can detect even without spaces
const jlptCommand = [];
let loop = 0;
Object.values(enumjlptCommand).forEach((value) => {
  const newMessage = value.replace(/ /g, '').toLowerCase();
  jlptCommand[loop] = newMessage;
  loop++;
});


// JLPT role IDs
const enumjlptID = {
  n5: '779928524341116929',
  n4: '779928531912097812',
  n3: '779928533345501195',
  n2: '779928536596217856',
  n1: '779928538919993375',
};

const jlptID = Object.values(enumjlptID);

const enumjlptRoom = {
  room1: '779907252173668362',
  room2: '787604436277133353',
  room3: '823049788416065597',
};
const jlptRoom = Object.values(enumjlptRoom);

const enumembedImage = {
  n5: 'https://i.imgur.com/OMGwNy1.png',
  n4: 'https://i.imgur.com/lgrRCyR.png',
  n3: 'https://i.imgur.com/h4sGE5m.png',
  n2: 'https://i.imgur.com/pwkndoC.jpg',
  n1: 'https://i.imgur.com/nrKlTx3.png',
};
const jlptEmbedImage = Object.values(enumembedImage);
const enumembedColor = {
  n5: '#63a7ff',
  n4: '#ff6363',
  n3: '#a763ff',
  n2: '#fd0061',
  n1: '#4dffd5',
};

const jlptEmbedColor = Object.values(enumembedColor);

const jlptChannelTag = {
  roomName: '<#813651428521672716>!',
};

module.exports = {
  jlptTestInfo,
  enumjlptCommand,
  enumjlptRoom,
  jlptCommand,
  jlptID,
  jlptRoom,
  jlptEmbedImage,
  jlptEmbedColor,
  jlptChannelTag,
};
