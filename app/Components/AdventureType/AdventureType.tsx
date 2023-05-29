export default function AdventureType() {
    return (
        <div className='flex justify-center pt-5 pb-5 bg-secondary'>
            <select className="select w-full max-w-xs">
                <option disabled selected>Chose Your Adventure Type!</option>
                <option>Old Stuff</option>
                <option>Space Stuff</option>
                <option>Now Stuff</option>
                <option>Pirate Stuff</option>
                <option>Future Stuff</option>
                <option>A Long Time Ago In a... Stuff</option>
            </select>
        </div>
    );
};

