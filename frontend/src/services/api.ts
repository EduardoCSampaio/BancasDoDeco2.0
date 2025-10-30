import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: '/api',
});

// Types
export interface Registration {
  name: string;
  cpf: string;
  casinoId: string;
}

export interface Payment {
  id?: number;
  winnerId: string;
  amount: number;
  status?: string;
}

export interface User {
  id: string;
  name: string;
  cpf: string;
  casinoId: string;
}

// Register a user
export async function registerUser(userData: Registration): Promise<Registration> {
  try {
    const response = await api.post<Registration>('/registrations', userData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
}

// Get all registered users
export async function getRegisteredUsers(): Promise<Registration[]> {
  try {
    const response = await api.get<Registration[]>('/registrations');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
}

// Process payment for a winner
export async function processPayment(paymentData: Payment): Promise<Payment> {
  try {
    const response = await api.post<Payment>('/payments', paymentData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
}

// Get all payments
export async function getPaymentStatus(): Promise<Payment[]> {
  try {
    const response = await api.get<Payment[]>('/payments');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
}

// Login (mock)
export async function login(credentials: { cpf: string; password: string }): Promise<{ token: string; user: User }> {
  try {
    const response = await api.post<{ token: string; user: User }>('/login', credentials);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
}

// Helper to handle errors
function handleApiError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    throw error.response?.data || error.message;
  }
  throw error;
}