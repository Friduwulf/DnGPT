import React from 'react';
import  AdventureType  from '@/app/Components/AdventureType/AdventureType';
import Fantasy from '../Components/Questions/Fantasy';

export default async function NewAdventure() { 

  return (
    <>
        <AdventureType />
        <div>
            <Fantasy />
        </div>
    </>
  );
};