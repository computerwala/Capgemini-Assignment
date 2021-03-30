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

person1 = new person("Aman ","soni",22,["c++"],"07/10/1998",{city:"Bhopal",pincode:"462021"},"false","analyst traniee")
person2 = new person("shivam","pandey",21,"WEB","2/12/1999",{city:"Gorakpur",pincode:"3745156"},"false","analyst traniee")

print=function(){
console.log(person1);
console.log(person2);
}();