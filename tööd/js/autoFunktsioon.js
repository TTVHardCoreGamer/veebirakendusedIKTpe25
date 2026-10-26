//1. Objekt
let auto = {
    //omadused
    mark: "Toyota",
    mudel: "Corolla L",
    aasta: 2022,
    varv: "punane",
    omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

    //meetodid
    taisnimi() {
        return this.mark + " " + this.mudel;
    }
};

console.log(auto);

//2. Meetod ja this
console.log(auto.taisnimi());

//3. Objektide massiiv
let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

autod.forEach((auto) => {
    console.log(auto.mark + " " + auto.mudel + " " + auto.aasta);
});