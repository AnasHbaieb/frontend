const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001/api';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

async function handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Une erreur est survenue côté serveur');
  }
  const data = await response.json();
  return { success: true, data };
}

export async function get<T>(path: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`);
    return handleResponse<T>(response);
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function post<T>(path: string, body: any): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(response);
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function put<T>(path: string, body: any): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(response);
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function remove<T>(path: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'DELETE',
    });
    return handleResponse<T>(response);
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
