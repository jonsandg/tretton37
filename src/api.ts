const API_URL = 'https://api.1337co.de/v3/employees';
const API_KEY = process.env.REACT_APP_API_KEY;

if (!API_KEY) {
  throw new Error('Please provide an api key in environment variable REACT_APP_API_KEY');
}

export interface EmployeeAPIData {
  name: string;
  office: string;
  gitHub: string | null;
  twitter: string | null;
  stackOverflow: string | null;
  linkedIn: string | null;
  imagePortraitUrl: string | null;
}

export const getAllEmployees = async (): Promise<EmployeeAPIData[]> => {
  const res = await fetch(API_URL, {
    method: 'GET',
    headers: {
      Authorization: API_KEY
    }
  })
  return res.json();
}