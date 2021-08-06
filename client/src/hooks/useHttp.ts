import axios from 'axios'

export const useHttp = () => {

  // template of get request with authorization
  const getRequest = async (url: string): Promise<any> => {
    const response = await axios.get(url)
    const data = await response.data
    return data
  }
  // end of function

  // template of post request with authorization
  const postRequest = async (url: string, body: any): Promise<any> => {
    const response = await axios.post(url, body)
    const data = await response.data
    return data
  }
  // end of function

  // template of put request with authorization
  const putRequest = async (url: string, body?: any): Promise<any> => {
    const response = await axios.put(url, body)
    const data = await response.data
    return data
  }
  // end of function

  const deleteRequest = async (url: string): Promise<any> => {
    const response = await axios.delete(url)
    const data = await response.data
    return data
  }

  return {
    get: getRequest,
    post: postRequest,
    put: putRequest,
    delete: deleteRequest
  }
}






