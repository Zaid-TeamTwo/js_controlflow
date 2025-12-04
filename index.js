let nameRestaurant = "Krusty Krab";
let ingredients = "bread, tomatoes, beef, and plankton";
let purchasePerDay = 600; // contoh nilai pembelian per hari

function getEmployeeOfTheMonth() {
    return{
        name: "Spongebob",
        age: 12
    };
}

// cek apakah reesp enak
if (purchasePerDay>500) {
    console.log("Resepnya enak dan lezat");
} else {
    console.log("Resepnya standar dan biasa");
}

let employee = getEmployeeOfTheMonth();

console.log("Restaurant:", nameRestaurant);
console.log("Ingredients:", ingredients);
console.log("Employee of The Month:", employee.name, "- Age", employee.age);


a = 8;
b = 10;
c = a*b;

console.log(c);
