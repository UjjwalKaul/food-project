import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    // Parse the URL to get search parameters
    const { searchParams } = new URL(req.url);

    // Extract the 'p' query parameter
    const query = searchParams.get('p');

    // Check if the 'p' parameter is provided
    if (!query) {
      return NextResponse.json(
        { error: 'Missing required query parameter "p"' },
        { status: 400 }
      );
    }

    // Prepare the parameters for the API request
    const params = {
      type: 'public',
      q: query,
      app_id: process.env.API_APPLICATION_ID,
      app_key: process.env.API_APPLICATION_KEY,
      random: false,
      ingr: '8',
      imageSize: 'LARGE',
    };

    // Make the API request using Axios
    const response = await axios.get(process.env.API_URL as string, { params });

    // Return the API response data as JSON
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching request:', error);

    // Return an error response in case of failure
    return NextResponse.json(
      { error: 'Failed to fetch data from the API' },
      { status: 500 }
    );
  }
}
