import { helper } from '@ember/component/helper';

const CONVERTER = {
  F: (temperature, targetUnit) => {
    switch (targetUnit) {
      case 'C':
        return Math.round(((temperature - 32) * 5) / 9);
      default:
        return temperature;
    }
  },
  C: (temperature, targetUnit) => {
    switch (targetUnit) {
      case 'F':
        return Math.round(temperature * (9 / 5) + 32);
      default:
        return temperature;
    }
  },
};

export default helper(function convertTemperature([
  temperature,
  sourceUnit,
  targetUnit,
]) {
  return CONVERTER[sourceUnit](temperature, targetUnit);
});
