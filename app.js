const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones

const democrats = presidents.filter((presidents) => presidents.party === "D");

console.table(democrats);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

const oneTermRepublican = presidents.filter(
  (presidents) => presidents.party === "R" && presidents.terms < 2
);

console.table(oneTermRepublican);

//3) return only the last three presidents
presidents.splice(0, 9);
console.table(presidents);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice

const demTwoTerm = presidents.filter(
  (presidents) => presidents.party === "D" && presidents.terms > 1
);

console.table(demTwoTerm);

//i do not know how to unsplice? it from part 3

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

const checkLBJ = alert("LBJ served two terms");
if (president.name === "Lydon Johnson" && president.terms === 2) {
} else alert("LBJ was one and done");

console.log(checkLBJ);
