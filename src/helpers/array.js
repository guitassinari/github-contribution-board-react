export function splitArrayIntoChunksOf(chunkSize, array) {
  let index = 0;
  let arrayLength = array.length;
  let chunks = [];
  
  for (index = 0; index < arrayLength; index += chunkSize) {
      const chunk = array.slice(index, index+chunkSize);
      chunks.push(chunk);
  }

  return chunks;
}


export function unique(value, index, self) { 
  return self.indexOf(value) === index;
}