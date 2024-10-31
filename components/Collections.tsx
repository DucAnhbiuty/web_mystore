import { getCollections } from '@/lib/action'
import { Collection } from 'mongoose'
import Image from 'next/image'
//import React from 'react'


const Collections = async () => {
  const Collections = await getCollections()
  return (
    <div >
      <p className='text-heading1-bold'>Collections</p> 
      <div>
        {Collections.map((Collection: CollectionType) => (
          <link href={'/Collection${collection._id}'}key={Collection._id}>
            <Image src={Collection.image} alt={Collection.title} width={350} height={200} className='rounded-lg cursor-pointer'></Image>
          </link>
        ))}
      </div>
    </div>
  )
}

export default Collections
