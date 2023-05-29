import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  additionalInfo: string;
  numberOfPlayers: number;
}

const MyPage = (): JSX.Element => {
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);

  const handleInfoChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setAdditionalInfo(e.target.value);
  };

  const handlePlayerChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setNumberOfPlayers(parseInt(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const playerNumber = 1;
    localStorage.setItem('formData', JSON.stringify({ additionalInfo, numberOfPlayers, playerNumber }));
    window.location.href = '/Components/Characters/Fantasy';
  };

  return (
    <div className="container mx-auto p-4 bg-secondary">
      <h1 className="text-3xl font-bold mb-4">Welcome to Eldoria!</h1>
      <p className="mb-4">
      Welcome to the world of Eldoria, a land brimming with magic, adventure, and ancient secrets. Within its vast and diverse realms, countless civilizations, mythical creatures, and powerful artifacts await those brave enough to explore its depths.
      </p>
      <p className="mb-4">
      Geography:
      Eldoria is a continent nestled between vast oceans, with a varied landscape that ranges from towering mountains and dense forests to sprawling plains and arid deserts. The central mountain range, known as the Spine of Eldor, cuts through the land, separating the eastern and western regions. Mighty rivers flow from these peaks, nourishing the fertile valleys below.
      </p>
      <p className="mb-4">
      Kingdoms and Factions:
      The continent is home to several influential kingdoms and factions, each with their own unique cultures and ambitions. The Kingdom of Valoria, known for its chivalry and honor, thrives in the eastern part of Eldoria, while the enigmatic Sylvan Forest harbors the elven nation of Arindor, where nature and magic intertwine harmoniously. The Dwarven Strongholds, built within the heart of the mountains, are renowned for their masterful craftsmanship and deep loyalty. Meanwhile, the arcane city-state of Arcanum stands as a hub of magical knowledge and power, attracting scholars and wizards from all corners of Eldoria.
      </p>
      <p className="mb-4">
      Magic and Mythology:
      Magic courses through the veins of Eldoria, shaping its history and permeating the lives of its inhabitants. The ancient Order of the Arcane seeks to uphold the balance of magic and train its wielders, while the elusive Circle of Shadows practices forbidden arts and dwells in the shadows. Legends tell of mythical creatures like dragons, phoenixes, and griffins, whose existence stirs the imaginations of many.
      </p>
      <p className="mb-4">
      Ancient Ruins and Lost Treasures:
      Throughout Eldoria, ruins from forgotten civilizations lie in wait, filled with relics of immense power and knowledge. The crumbling halls of the Elven Kingdom of Zephyrion beckon adventurers to uncover the secrets of their downfall, while the treacherous Lost Marshes hide the entrance to the fabled Temple of Eternity, rumored to grant immortality to those deemed worthy.
      </p>
      <p className="mb-4">
      Quests and Adventures:
      In Eldoria, opportunities for adventure abound. From slaying fearsome beasts that terrorize villages to embarking on perilous quests to recover legendary artifacts, heroes can forge their destinies. Ancient prophecies speak of a looming darkness, a sinister force that threatens to plunge Eldoria into chaos. Will you be the one to stand against it?
      </p>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="additionalInfo" className="font-bold">Additional Information:</label>
        <input
          type="text"
          id="additionalInfo"
          className="w-full border border-accent bg-primary text-info font-semibold rounded p-2"
          value={additionalInfo}
          onChange={handleInfoChange}
          placeholder='Enter any additional information here...'
        />
      </div>

      <div className="mb-4">
        <label htmlFor="numberOfPlayers" className="font-bold">Number of Players:</label>
        <select
          id="numberOfPlayers"
          className="w-full border border-accent bg-primary text-info font-semibold rounded p-2"
          value={numberOfPlayers}
          onChange={handlePlayerChange}
        >
          <option value={1}>1 Player</option>
          <option value={2}>2 Players</option>
          <option value={3}>3 Players</option>
          <option value={4}>4 Players</option>
          <option value={5}>5 Players</option>
        </select>
      </div>

      <input
          type="submit"
          className="bg-primary hover:bg-neutral text-info font-bold py-2 px-4 rounded"
          value="Submit"
        />
    </form>
    </div>
  );
};

export default MyPage;