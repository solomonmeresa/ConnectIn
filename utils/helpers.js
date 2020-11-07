module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date().getFullYear()}`;
  },

  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },

  format_url: (url) => {
    return url
      .replace("http://", "")
      .replace("https://", "")
      .replace("www.", "")
      .split("/")[0]
      .split("?")[0];
  },
  get_first: (word) => {
    return word.charAt(0).toUpperCase();
  },
  upperCaseFirst: (aString) => {
    return aString.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  },
};
