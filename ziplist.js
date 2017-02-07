/**
 * This is a practice at home WOD, Zip List for E27
 * Created by Jake Denton-Kubo on 2/6/2017.
 */

const listA = ['a', 'b', 'c'];
const listB = [1, 2, 3];

function zipList(a, b) {
  const ret = [];
  let i = 0;
  while (i !== a.length || i !== b.length) {
    ret.push(a[i]);
    ret.push(b[i]);
    i += 1;
  }
  return ret;
}

console.log(zipList(listA, listB));

function zipListTheSimpleWay(a, b) {
  return _.flatten(_.zip(a, b));
}

console.log(zipListTheSimpleWay(listA, listB));
