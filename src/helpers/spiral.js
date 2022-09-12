function spiral(size, n) {
  const multiplier = size / n;
  let direction = 0; 
  let currentLine = 0;
  let limit = 1;
  const current = [];
  const ans = {}
  for (let i = 0; i < n**2; i++) {
    if (i === 0) {
      if (n % 2 === 0) {
        current[0] = (n / 2) - 1;
        current[1] = n / 2;
      } else {
        current[0] = Math.floor(n / 2);
        current[1] = Math.floor(n / 2);
      };
    } else {
      switch (direction) {
        case 0:
          current[0]++;
          break;
        case 1:
          current[1]--;
          break;
        case 2:
          current[0]--;
          break;
        case 3:
          current[1]++;
          break;
      }
    };

    if (currentLine >= Math.floor(limit)) {
      currentLine = 0;
      direction++;
      limit += 0.5;
      if (direction >= 4) direction = 0;
    }

    currentLine++;
    
    ans[i+1] = [current[0] * multiplier, current[1] * multiplier];
  }

  return JSON.parse(JSON.stringify(ans))
};

export default spiral;
