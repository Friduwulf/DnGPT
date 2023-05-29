'use server'

import AdventureType from "@/app/Components/AdventureType/AdventureType";

export async function selection() {
    const adventureType = document.getElementById('select');
    await function handleSelectChange (event: React.ChangeEvent<HTMLSelectElement>) {
        adventureType(event.target.value);
        console.log(adventureType);
    };
};
