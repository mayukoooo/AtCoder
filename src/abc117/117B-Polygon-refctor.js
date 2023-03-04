function main(input) {
  input = input.split("\n");
  let N = input[0].split(" ").map((num) => parseInt(num, 10));
  let L = input[1].split(" ").map((num) => parseInt(num, 10));
  const maxNum = Math.max(...L);
  const initialVal = 0;
  const sum = L.reduce(
    (prevVal, currentVal) => prevVal + currentVal,
    initialVal
  );

  const res = sum - maxNum > maxNum ? "Yes" : "No";
  console.log(res);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
