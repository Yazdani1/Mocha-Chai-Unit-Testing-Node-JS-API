const expect = require("chai").expect;
const { before } = require("mocha");
const axios = require("axios");
let chai = require("chai");
let should = chai.should();

const { API_URL, createUser } = require("./test_utils");

let newuser = undefined;


before(async () => {

  newuser = await createUser();


});

describe("Get User Info", function () {
  createUser();
  it("Get All User Lists", async () => {
    const response = await axios.get(API_URL + "/getuserinfo");

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("array");
  });

  it("Get Single User", async () => {

    const response = await axios.get(API_URL + "/singleuser/" + newuser._id);


    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });

  it("Should have all the property for each user", async () => {
    const response = await axios.get(API_URL + "/singleuser/" + newuser._id);

    expect(response.data.email).to.be.equal("js@gmail.com");

    response.data.should.have.property("name");
    response.data.should.have.property("email");
    response.data.should.have.property("age");

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });
});

// describe("Check two numbers",function(){

//     it("Match two numbers",()=>{

//         let first = 10;
//         let second =10;

//         expect(first).to.be.equal(second);

//     });

//     it("Should not Match two numbers",()=>{

//         let first = 20;
//         let second =50;

//         expect(first).not.to.be.equal(second);

//     });

//     it("Should have matching name ",()=>{

//         let name = "Yaz"

//         expect(name).to.be.equal("Yaz");

//     });

// })
