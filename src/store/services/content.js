import axios from 'axios'

const ALL = 'https://painassasin.online/catalog/track/all/'

export const getContent = async () => {
  try {
    const { data } = await axios.get(ALL)
    console.log(data)
    return { data }
  } catch (error) {
    console.log(error)
  }
}
