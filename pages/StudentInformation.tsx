import { useState } from 'react';

type Item = {
  ID: string;
  Programme: string;
  Year: string;
}

const Demo: React.FC = function () {
  const [data, setData] = useState<Item>({ID: '', Programme: '', Year: ''});

  function save() {
    localStorage.setItem('data', JSON.stringify(data));
    console.log('Data is saved');
  }

  function load() {
    const read = localStorage.getItem('data');    
    if (read) {
      const obj = JSON.parse(read) as Item;
      setData(obj);
      console.log('Loading is done');
    } else {
      console.log('No data is found');
    }
  }

  function clear() {
    localStorage.removeItem('data');    
    console.log('Data is cleared');
  }

  return (
    <div>
      Student ID: <input value={data.ID} onChange={x => setData({ ...data, ID: x.target.value })} />
      <br />
      Programme of the student: <input value={data.Programme} onChange={x => setData({ ...data, Programme: x.target.value })} />
      <br />
      Year of entrance: <input value={data.Year} onChange={x => setData({ ...data, Year: x.target.value })} />
      <br />
      <button onClick={save}>Save to local storage</button>
      <button onClick={load}>Load from local storage</button>
      <button onClick={clear}>Clear local storage</button>
    </div>
  );
};

export default Demo;
