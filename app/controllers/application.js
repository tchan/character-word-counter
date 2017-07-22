import Ember from 'ember';
const { get, computed } = Ember;
export default Ember.Controller.extend({
  example: "Write something here",
  text: "",
  charDanger: computed('text', function() {
      var text = get(this, 'text');
      if (text.length <= 80) {
        return false;
      }
      else if (text.length > 80) {
        return true;
      }
  }),

  wordDanger: computed('wordCount', function() {
    var wordCount = get(this, 'wordCount');
    if (wordCount >=8 && wordCount <=14) {
      return false;
    }
    else if (wordCount >14 || wordCount <8) {
      return true;
    }
  }),

  charAndWordDanger: computed('charDanger', 'wordDanger', function() {
    var charDanger = get(this, 'charDanger');
    var wordDanger = get(this, 'wordDanger');
    return (charDanger || wordDanger);
  }),

  wordCount: computed('text', function() {
    //account for initial text
    var text = get(this, 'text');
    if (text === "") {
      return 0;
    }
    else
    {
      var repl = text.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
      return repl.split(" ").length;
    }
  }),
  resultMessage: computed('wordCount', function() {
    var text = get(this, 'text');
    var wordCount = get(this, 'wordCount');
    if (wordCount === 0) {
      return "Write your title!";
    }
    else if (wordCount >=8 && wordCount <=14 && text.length <=80) {
      return "Your title is ideal for sharing!"
    }
    else if (wordCount >=8 && wordCount <=14 && text.length >80) {
      return "Your title has too many characters!"
    }
    else if (wordCount <8){
      return "Your title is too short!";
    }
    else if (wordCount >14 ) {
      return "Your title has too many words!";
    }
  })


});
