// this = window
// window.name = ""
// const org = {
//     orgName: 'CN',
//     welcome: function(){
//         // this = org
//         const  arrow = () => {
//             console.log(`Welcome from ${this.orgName}`);
//         }
//             arrow();
//     }
// }

// org.welcome();

// function Org(orgName){
//     this.orgName = orgName;
//     this.welcome = function(){
//         console.log(`Welcome from ${this.orgName}`);
//     }
// }

// const org = new Org("CN");
// org.welcome()

// function Sector(domain){
//     this.domain = domain;
// }

// const sector = new Sector("EdTech");
// // console.log(sector.domain)

// Sector.prototype.getDomain = function(){
//     console.log(this.domain)
// }
// sector.getDomain()

// Org.prototype.__proto__ = Sector.prototype;

// org.getDomain()

// Call/Apply
const org = {
    orgName: 'CN',
    welcome: function(someOtherOrg, secondArgumnet){
        // this = org, something that JS is doing internally
        const  arrow = () => {
            console.log(`Welcome from ${this.orgName} & ${someOtherOrg}`);
        }
            arrow();
    }
}

const org1 = {
    orgName: 'Coding Ninjas',
}


org.welcome("Naukri.com") // Welcome from CN & Naukri.com , undefined, undefined
org.welcome.call(org1, "Naukri.com", 123) // Welcome from Coding Ninjas & Naukri.com , undefined, undefined
org.welcome.apply(org1, ["Naukri.com", 123]) // Welcome from Coding Ninjas & Naukri.com , undefined, undefined

const instance = org.welcome.bind(org1, "Naukri.com", "12345","Third")
// org.welcome.call(valueOfThis, arg1, arg2, arg...)


instance()
// // Page 1
// // Page 2
// // Page 3

// JOb Listing Platform

// - Jobs
// - Companies
// - People

// search - FrontEnd

// function Filter(searchString, data){
//     return filteredData;
// }

// Polyfills
// map, forEach, reduce, filter, find
// Array.prototype.forEach(element => {
    
// });

// Array.prototype.customFilter = function(){
//     return this;
// }

// [
//     {
//         name: 'Senior Software Developer',
//         id: 123,
//         skills: ['Frontend']
//     },
//     {
//         name: 'Software Developer',
//         id: 123,
//         skills: ['Frontend']
//     }
// ]

// data.customFilter()



// Table Data




// if else, for, array.HOF, document, addEventListener, fetch, let, const
// function 


// When we need to assign the value of this explicitly(manually) we use call, apply and bind

