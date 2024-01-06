function jobScheduling(startTime,endTime,profit){
    let jobs = [];
    for(let i=0;i<startTime.length;i++){
        jobs.push([startTime[i],endTime[i],profit[i]]);
    }
    jobs.sort((a,b)=>a[1]-b[1]);
    let dp = new Array(jobs.length).fill(0);
    dp[0] = jobs[0][2];
    for(let i=1;i<jobs.length;i++){
        let currProfit = jobs[i][2];
        let prevJob = -1;
        for(let j=i-1;j>=0;j--){
            if(jobs[j][1]<=jobs[i][0]){
                prevJob = j;
                break;
            }
        }
        if(prevJob!=-1){
            currProfit+=dp[prevJob];
        }
        dp[i] = Math.max(currProfit,dp[i-1]);
    }
    return dp[jobs.length-1];
}

console.log(jobScheduling([1,2,3,3],[3,4,5,6],[50,10,40,70]));