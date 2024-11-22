export default function StatePage({ stateName }) {
    return <h1>Welcome to {stateName}</h1>;
  }
  
  // Define all possible routes
  export async function getStaticPaths() {
    return {
      paths: [
        { params: { stateName: "brignmam-california" } },
        { params: { stateName: "texas" } },
      
        
      ],
      fallback: false,
    };
  }
  
  // Fetch the data for the current route
  export async function getStaticProps({ params }) {
    const { stateName } = params;
    return {
      props: {
        stateName, // Pass stateName to the component
      },
    };
  }
  