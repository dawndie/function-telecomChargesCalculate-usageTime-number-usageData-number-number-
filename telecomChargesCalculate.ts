function telecomChargesCalculate(usageTime: number, usageData: number): number {
  if (usageTime <= 0 || usageTime > 1000) {
    return 0;
  }
  if (usageData <= 0 || usageData > 1000) {
    return -1;
  }
  let dataCharges: number = 0;
  let phoneCallCharges: number = 0;
  dataCharges = 5000 * usageData;
  if (usageTime <= 30) {
    phoneCallCharges = usageTime * 1800;
  } else if (30 < usageTime && usageTime <= 60) {
    phoneCallCharges = usageTime * 1500;
  } else if (usageTime > 60) {
    phoneCallCharges = usageTime * 1000;
  }
  return dataCharges + phoneCallCharges;
}
