'use client'

import React, { useState } from 'react';
import Fantasy from '../Questions/Fantasy';
import Midieval from '../Questions/Midieval';
import Modern from '../Questions/Modern';
import Pirate from '../Questions/Pirate';
import SciFi from '../Questions/SciFi';

const SelectedAdventure: React.FC = () => {
    const [selected, setSelected] = useState<string>('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value);
    };

    return (
        <>
        <div className='flex justify-center pt-5 pb-5 bg-secondary'>
            <select value={selected} onChange={handleSelectChange} className="select w-full max-w-xs">
                <option value='None' disabled selected>Chose Your Adventure Type!</option>
                <option value='Fantasy'>Fantasy</option>
                <option value='SciFi'>SciFi</option>
                {/* <option value='Modern'>Modern</option> */}
                {/* <option value='Pirate'>Pirate</option> */}
                <option value='Midieval'>Midieval</option>
            </select>
        </div>
        {selected === 'Fantasy' && <Fantasy />}
        {selected === 'SciFi' && <SciFi />}
        {selected === 'Modern' && <Modern />}
        {selected === 'Pirate' && <Pirate />}
        {selected === 'Midieval' && <Midieval />}
        </>
    );
};

export default SelectedAdventure;