 import { Yolo } from './yolo';

var y = new Yolo("yolo", 1);
y.osef();

y.angle = 2;

const result = y.calculer();
const str = result.toFixed(2);

// y = 1; 
