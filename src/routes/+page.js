import { getDailyCases, getProvinceCases } from '../services/coviddata'
/** @type {import('./$types').PageLoad} */
export function load() {
    return {
      daily: getDailyCases(),
      province: getProvinceCases()
    };
  }