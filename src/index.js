import _ from 'lodash';

export default (docs, pattern) => {
  if (!Array.isArray(docs)) {
    throw new Error('Bad docs provided!');
  }
  if (typeof pattern !== 'string') {
    throw new Error('Bad pattern provided!');
  }
  if (!docs.length || !pattern.length) {
    return [];
  }
  const regexp = new RegExp(pattern);
  const validDocs = docs
    .filter((doc) => _.isObject(doc))
    .filter(({ id, text }) => id && text)
    .filter(({ text }) => regexp.test(text))
    .map(({ id }) => id);

  return validDocs;
};
