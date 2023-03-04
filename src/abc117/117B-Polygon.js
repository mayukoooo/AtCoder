function main(input) {
  input = input.split("\n");
  let N = input[0].split(" ");
  let L = input[1].split(" ");

  let nums = [];
  for (let i = 0; i < N; i++) {
    nums.push(parseInt(L[i], 10));
  }

  let Max_val = Math.max(...nums);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  if (Max_val < sum - Max_val) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
