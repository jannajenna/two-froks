// export async function getStaticProps() {
//     // Fetch data from external API
//     const api = "https://blush-entertaining-raver.glitch.me/available-spots";
//     const res = await fetch(api);
//     // If no data - no page (404)
//     if (res.status != 200) {
//       return {
//         notFound: true,
//       };
//     }
//     const data = await res.json();
//     // Pass data to the page via props
//     return {
//       props: {
//         data,
//       },
//     };
//   }

export const TentData = [
  {
    title: "Svartheim",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
  },
  {
    title: "Nilfheim",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
  },
  {
    title: "Helheim",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
  },
  {
    title: "Muspelheim",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
  },
  {
    title: "Alfheim",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
  },
];
