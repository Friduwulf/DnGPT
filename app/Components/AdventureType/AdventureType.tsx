'use client'

import React, { useState } from 'react';
import Mediaeval from '../Characters/Mediaeval';
import Modern from '../Characters/Modern';
import Pirate from '../Characters/Pirate';
import SciFi from '../Characters/SciFi';
import Fantasy from '@/app/Components/AdventureSetup/Fantasy';

const SelectedAdventure: React.FC = () => {
    const [selected, setSelected] = useState<string>('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value);
    };

    return (
        <>
        <div className='flex justify-center pt-5 pb-5 bg-secondary'>
            <select value={selected} onChange={handleSelectChange} className="select w-full max-w-xs bg-primary hover:bg-neutral text-info font-bold py-2 px-4 rounded">
                <option value='None'>Chose Your Adventure Type!</option>
                <option value='Fantasy'>Fantasy</option>
                <option value='SciFi'>SciFi</option>
                {/* <option value='Modern'>Modern</option> */}
                {/* <option value='Pirate'>Pirate</option> */}
                <option value='Mediaeval'>Mediaeval</option>
            </select>
        </div>
        {selected === 'none' && <Fantasy />}
        {selected === 'Fantasy' && <Fantasy />}
        {selected === 'SciFi' && <SciFi />}
        {selected === 'Modern' && <Modern />}
        {selected === 'Pirate' && <Pirate />}
        {selected === 'Mediaeval' && <Mediaeval />}
        </>
    );
};

export default SelectedAdventure;