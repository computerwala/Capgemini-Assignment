function person(fname, lname, age, skills, dateofbirth, address, married, profession) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.skills = skills;
    this.dateofbirth = dateofbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;

}

shivani = new person("shivani", "soni", 21, "python", "6/9/1999", { city: "Sagar", pincode: "144411" }, "false", "sr analyst")
aman = new person("aman", 22, "C++", "7/10/1998", "false", "jr analyst")


var aman = Object.create(shivani);

kavya = new person("kavya", shivani.lname, "22", aman.skills, "26/05/1998", shivani.address, aman.married, shivani.profession);

print=function(){
	console.log(kavya);
}();