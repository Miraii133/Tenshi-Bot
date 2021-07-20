/* eslint-disable max-len */
const jlptTestInfo = {
  passScore: '10',
  minimumMistakes: '5',
  timeLimit: '30',
  delayNoAnswer: '4.5',
  delayRightAnswer: '0',
  otherPlayerWait: '0',
};

const enumjlptCommand = {
  n5: `k!quizgn5+n5${jlptTestInfo.passScore}mmq=20atl=30dauq=0daaq=0aaww=0`,
  n4: `k!quizgn4+n4${jlptTestInfo.passScore}mmq=5atl=30dauq=4.5daaq=0aaww=0`,
  n3: `k!quizgn3+n3${jlptTestInfo.passScore}mmq=5atl=30dauq=4.5daaq=0aaww=0`,
  n2: `k!quizgn2+n2${jlptTestInfo.passScore}mmq=5atl=30dauq=4.5daaq=0aaww=0`,
  n1: `k!quizgn1+n1${jlptTestInfo.passScore}mmq=5atl=30dauq=4.5daaq=0aaww=0`,
};


// Kotoba cannot read quizzes without spaces
// this is needed
const spacedjlptCommand = {
  n5: `k!quiz gN5+N5 ${jlptTestInfo.passScore} 
  mmq=${jlptTestInfo.minimumMistakes} atl=${jlptTestInfo.timeLimit} 
  dauq=${jlptTestInfo.delayNoAnswer} daaq=${jlptTestInfo.delayRightAnswer} 
  aaww=${jlptTestInfo.otherPlayerWait}`,

  n4: `k!quiz gN4+N4 ${jlptTestInfo.passScore} 
  mmq=${jlptTestInfo.minimumMistakes} atl=${jlptTestInfo.timeLimit} 
  dauq=${jlptTestInfo.delayNoAnswer} daaq=${jlptTestInfo.delayRightAnswer} 
  aaww=${jlptTestInfo.otherPlayerWait}`,

  n3: `k!quiz gN3+N3 ${jlptTestInfo.passScore} 
  mmq=${jlptTestInfo.minimumMistakes} atl=${jlptTestInfo.timeLimit} 
  dauq=${jlptTestInfo.delayNoAnswer} daaq=${jlptTestInfo.delayRightAnswer} 
  aaww=${jlptTestInfo.otherPlayerWait}`,

  n2: `k!quiz gN2+N2 ${jlptTestInfo.passScore} 
  mmq=${jlptTestInfo.minimumMistakes} atl=${jlptTestInfo.timeLimit} 
  dauq=${jlptTestInfo.delayNoAnswer} daaq=${jlptTestInfo.delayRightAnswer} 
  aaww=${jlptTestInfo.otherPlayerWait}`,

  n1: `k!quiz gN1+N1 ${jlptTestInfo.passScore} 
  mmq=${jlptTestInfo.minimumMistakes} atl=${jlptTestInfo.timeLimit} 
  dauq=${jlptTestInfo.delayNoAnswer} daaq=${jlptTestInfo.delayRightAnswer} 
  aaww=${jlptTestInfo.otherPlayerWait}`,
};
const jlptCommand = Object.values(spacedjlptCommand);
const replaceComm = jlptCommand.replace(/ /g, '');
console.log(replaceComm);

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
  room4: '846690933751152640',
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
  spacedjlptCommand,
  enumjlptRoom,
  jlptCommand,
  jlptID,
  jlptRoom,
  jlptEmbedImage,
  jlptEmbedColor,
  jlptChannelTag,
};
