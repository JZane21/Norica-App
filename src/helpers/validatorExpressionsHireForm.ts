export const evaluateWord = (range1:number, range2:number, value:string) => {
  const expression:string = `/^(?=.{${range1},${range2}}$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]+(?:\s[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]+)*$/`;
  const regExpression:RegExp = new RegExp(expression);
  return regExpression.test(value);
};

export const evaluateLenght = (range1:number, range2:number, value:string) => {
  const expr:string = `^.{${range1},${range2}}$`;
  const regExpression:RegExp = new RegExp(expr);
  return regExpression.test(value);
};

export const evaluateSpell = (value:string) => {
  const regExpression:RegExp = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]+(?:\s)*$/;
  return regExpression.test(value);
};