import { getCars } from './getCars';
import { generateReport } from './generateReport'

document.getElementById('message-element').textContent = "loading...";

getCars().then(cars=> {

const message = generateReport(cars, 2000);

document.getElementById('message-element')
  .textContent = message;

});






















