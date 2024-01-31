import { environment } from 'environments/environment';

export const createThreadUseCase = async () => {
  try {
    console.log('AQUI VOY');
    const resp = await fetch(`${environment.assistantApi}/create-thread`, {
      method: 'POST',
    });
    console.log('resp', resp);

    const { id } = (await resp.json()) as { id: string };

    return id;
  } catch (error) {
    throw new Error('Error creating thread ID');
  }
};
