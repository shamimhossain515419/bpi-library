'use client'

import { Toaster } from 'react-hot-toast';

export default function CustomToastMessage() {
     return (
          <div>
               <Toaster
                    position="top-center"
                    reverseOrder={false}
               />

          </div>
     )
}
