'use server';

import { getSession } from '@/lib/auth';
import { revalidatePath, revalidateTag } from 'next/cache';

export const handleClickDelete = async (id: any) => {
  const session = await getSession();
  const BASE_URL: string | undefined = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${BASE_URL}/uk/api/admin/city/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + session.access,
      },
    });
    if (response.status === 200) {
      revalidateTag('city');
      //   enqueueSnackbar(`${staticData.cityTable.snackBar.remove_success}`, {
      //     variant: 'success',
      //   });
      // setCityList((prevImagesList: StopsProps[]) => {
      //   const updatedImagesList = prevImagesList.filter(
      //     (el: StopsProps) => el.id !== id,
      //   );
      //   return updatedImagesList;
      // });
      return response.status;
    }
  } catch (error) {
    console.error(error);
    // enqueueSnackbar(`${staticData.cityTable.snackBar.remove_error}`, {
    //   variant: 'error',
    // });
  }
};
