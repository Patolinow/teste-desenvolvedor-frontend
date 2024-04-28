import { Suspense } from 'react';
import SearchTable from './../../components/SearchTable/index';
import { Await, defer, json, useLoaderData } from 'react-router-dom';
import { IBula } from './../../interfaces/IBula';

interface ILoaderData {
  events: IBula[];
}

export default function SearchPage() {
  const { events } = useLoaderData() as ILoaderData;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={events}>
      {(loadedMedicines) => <SearchTable allSearchItems={loadedMedicines} />}
      </Await>
    </Suspense>
  );
}

async function loadMedicines() {
  const response = await fetch('http://localhost:3000/data');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch data.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

export function searchLoader() {
  return defer({
    events: loadMedicines(),
  });
}