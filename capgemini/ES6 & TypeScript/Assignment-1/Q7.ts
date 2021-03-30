let arr = ["a", "b", "c", "d"];
let [a, b, c, d] = arr;
console.log(c);

let OrgObj = {
    name: "Organization",
    address: {
        city: "City",
        country: "India",
        pincode: 464551,
    },
};
let { address: { pincode }, } = OrgObj;
console.log(pincode);