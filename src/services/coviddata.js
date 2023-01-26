import axios from 'axios'

export async function getDailyCases(){
    const url = `https://covid19.ddc.moph.go.th/api/Cases/today-cases-all`
    const res = await axios.get(url)
    return res.data[0]
}

export async function getProvinceCases(){
    const url = `https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces`
    const res = await axios.get(url)
    return res.data
}
