import { useRouter } from 'next/router';
import getSheetData from '../api/getGoogleSheetData'; // Assuming you have a default export function to get data from Google Sheets.

const StatePage = ({ stateData, niche, phone }) => {
  const router = useRouter();
  const { state } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      
      <div>
        <h1>Services in {stateData.name}</h1>
        <p>{stateData.content}</p>
        {/* Dynamic list of cities */}
        <ul>
          {stateData.cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const states = await getSheetData('about', 'B2:B53');
  const paths = states.map((state) => ({
    params: { state: state.name.toLowerCase() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const niche = await getSheetData('about', 'G2');
  const states = await getSheetData('about', 'B2:B53');
  const phone = await getSheetData('configs', 'phone', '2');
  const stateData = states.find((state) => state.name.toLowerCase() === params.state);

  if (!stateData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      stateData,
      niche,
      phone,
    },
    revalidate: 10,
  };
}

export default StatePage;
