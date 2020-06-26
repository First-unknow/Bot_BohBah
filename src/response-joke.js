class ResponseJoke {
  stage = 0;
  description = [];
  keyword = [];

  /**
   * @param {string} description
   * @param {string} keyword 
   */
  constructor(description, keyword) {
    let words = description.split(',')
    let keywords = keyword.split(',')
    this.description = words;
    this.keyword = keywords;
  }

  /**
   * @param {string} msg 
   * @returns {string} next response
   */
  next(msg) {
    this.stage++;
    if (this.stage === 1) {
      let randomPosition = parseInt(Math.random()*this.description.length);
      return 'ที่มัน' + this.description[randomPosition] + 'อะนะ';
    } else {
      for(let e in this.keyword){
        if (msg.includes(this.keyword[e])) {
          return 'แฮร่!';
        }
      }
        return 'เง้อออ';
    }
  }

  /**
   * @returns {boolean}
   */
  isEnded() {
    return this.stage >= 2;
  }
}

module.exports = ResponseJoke;