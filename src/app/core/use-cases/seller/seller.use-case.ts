import { SellerResponse } from '@interfaces/seller.response';
import { environment } from 'environments/environment';

export const sellerUseCase = async (prompt: string) => {
  try {
    const resp = await fetch(`${environment.backendApi}/seller`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!resp.ok)
      throw new Error('No se pudo realizar la consulta de vendedor');

    const data = (await resp.json()) as SellerResponse;

    return {
      ok: true,
      ...data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      userScore: 0,
      errors: [],
      message: 'No se pudo realizar la consulta ventas',
    };
  }
};
