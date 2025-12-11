function mincost(arr)
{ 
//write your code here
  let pq = arr.sort();
  let total = 0;

    while (pq.length > 1) {
    let x = pq.shift();
    let y = pq.shift();
    
    let sum = x + y;
    total += sum;

    let i = 0;
    while (i < pq.length && pq[i] < sum) i++;
    pq.splice(i, 0, sum);
  }

  return total;
// return the min cost
  
}

module.exports=mincost;
