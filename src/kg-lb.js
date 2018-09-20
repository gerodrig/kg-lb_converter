

export default function kgConverter(weight) {
const KG_LB = 2.20462
const LB_KG = 0.453592
const lbConverter = (weight) => (weight * LB_KG).toFixed(2);

return (weight * KG_LB).toFixed(2);
}



 
