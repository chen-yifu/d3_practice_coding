const carsJSON =`[
{
	"year": 2000,
  "make": "Honda",
  "model": "Accord",
  "price": 2000
},
{
	"year": 2015,
  "make": "BMW",
  "model": "328",
  "price": 30000
},
{
	"year": 2019,
  "make": "Tesla",
  "model": "Model 3",
  "price": 35000
},
{
	"year": 1998,
  "make": "Toyota",
  "model": "Corolla",
  "price": 1500
}
]`;

const cars = JSON.parse(carsJSON);

export const getCars = () => new Promise(resolve => {
	setTimeout(()=>resolve(cars),2000);
})





















