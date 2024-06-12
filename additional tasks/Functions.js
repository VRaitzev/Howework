function calcShipsCount(mas = []) {
    let counter = 0;
    for (let i = 0; i < mas.length; i++) {
        for (let j = 0; j < mas[0].length; j++) {
            if (mas[i][j]) {
                let ti = i;
                let tj = j;
                while(mas[i][j + 1] || (mas[i + 1] && mas[i + 1][j]) )
                {
                    i = ti;
                    j = tj;
                    while (mas[i][j + 1] || (mas[i + 1] && mas[i + 1][j]) ||  mas[i][j - 1])
                    {
                        if (mas[i][j + 1]) 
                        {
                            mas[i][j] = 0;
                            let t = j + 1;
                            while (mas[i][t] && t !== mas[0].length)
                            {
                                mas[i][t] = 0;
                                t++;
                            }
                            j = t-1
                        }
                        if (mas[i + 1] && mas[i + 1][j]) 
                        {
                            mas[i][j] = 0;
                            let t = i + 1;
                            while (mas[t] && mas[t][j] && t !== mas.length) 
                            {
                                mas[t][j] = 0;
                                t++;
                            }
                            i = t-1
                        }
                        if (mas[i][j - 1]) 
                        {
                            mas[i][j] = 0;
                            let t = j - 1;
                            while (mas[i][t] && t !== mas[0].length)
                            {
                                mas[i][t] = 0;
                                t--;
                            }
                            j = t + 1
                        }
                        mas[i][j]=0
                    }
                i = ti;
                j = tj;
                }
            if (mas[i+1] && mas[i+1][j+1]) 
            {
                mas[i][j] = 0;
                let t1 = i + 1;
                let t2 = j + 1;
                while (mas[t1][t2] && t1 !== mas.length && t2 !== mas[0].length)
                {
                    mas[t1][t2] = 0;
                    t1++;
                    t2++;
                }
            }
            if (mas[i+1] && mas[i+1][j-1]) 
            {
                mas[i][j] = 0;
                let t1 = i + 1;
                let t2 = j - 1;
                while (mas[t1][t2] && t1 !== mas.length && t2 !== mas[0].length)
                {
                    mas[t1][t2] = 0;
                    t1++;
                    t2--;
                }
            }
                counter++;
                mas[ti][tj] = 0;
            if (mas[i][j]){
                counter++;
                mas[i][j] = 0;
            }
            }
        }
    }
    console.log(counter);
};
calcShipsCount([
  [1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [1, 1, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 1, 0],
]);